import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/Dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

//APOLLO
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, useQuery, useLazyQuery } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { GetManagerAccessToken } from "./graphQL/Queries";

// SCENES
import UserManagement from "./scenes/userManagement/UserManagement";
import BrandManagement from "./scenes/brandManagement/BrandManagement";
import StoreManagement from "./scenes/storeManagement/StoreManagement";
import MachineManagement from "./scenes/machineManagement/MachineManagement";
import SystemNotificationManagement from "./scenes/systemNotificationManagement/SystemNotificationManagement";
import SystemCoinManagement from "./scenes/CoinManagement_System/SystemCoinManagement";
import BillboardManagement from "./scenes/billboardManagement/BillboardManagement";
import BrandCoinManagement from "./scenes/CoinManagement_Brand/BrandCoinManagement";
import AdsManagement from "./scenes/adsManagement/AdsManagement";

async function refreshToken() {
  try {
    const response = await client.query({
      query: GetManagerAccessToken,
      variables: {
        variables: {
          refreshToken: "Bearer " + localStorage.getItem('login_token')
        }
      }, // Replace with your own function to retrieve the refresh token
    });
    const newAccessToken = response.data.getManagerAccessToken;
    client.writeData({ data: { token: newAccessToken } });
    localStorage.setItem('token', newAccessToken);
  } catch (error) {
    console.error(error);
  }
}

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`)
      if (message === "Token過期") {
        const login_token = localStorage.getItem('login_token');
        localStorage.removeItem('token');
        refreshToken();
        // localStorage.setItem('token', "expired");
        // const { loading: loading1, error: error1, data: data1 } = useQuery(GetManagerAccessToken, {
        //   variables: {
        //     refreshToken: "Bearer " + login_token
        //   }
        // });
        // useEffect(() => {
        //   if (data1) {
        //     console.log("ACCESS TOKEN: " + data1.getManagerAccessToken);
        //     localStorage.setItem('token', data1.getManagerAccessToken);
        //   }
        //   else {
        //     console.log("NO GET ACCESS TOKEN DATA")
        //   }
        // }, [data1]);
      }
    })
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: "https://market-test.cloudprogrammingonline.com/graphql/" })
]);

// get the authentication token from local storage if it exists
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  console.log("ACESS TOKEN: " + token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});


const client = new ApolloClient({
  cache: new InMemoryCache(),
  // link: link

  //Use this if you want to use authLink
  link: authLink.concat(link)
});

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  //check if token is null if null navigate to login
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate("/login");
    }
  }, []);








  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <Routes>
            <Route path="/" element={<Login />} />
          </Routes> */}
            <div className="app">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                  {/* <Route path="/" element={<UserManagement />} /> */}
                  <Route exact path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/user-management" element={<UserManagement />} />
                  <Route path="/brand-management" element={<BrandManagement />} />
                  <Route path="/store-management" element={<StoreManagement />} />
                  <Route path="/ads-management" element={<AdsManagement />} />
                  <Route path="/machine-management" element={<MachineManagement />} />
                  <Route path="/billboard-management" element={<BillboardManagement />} />
                  <Route path="/system-notification" element={<SystemNotificationManagement />} />
                  <Route path="/system-coins" element={<SystemCoinManagement />} />
                  <Route path="/brand-coins" element={<BrandCoinManagement />} />
                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;
