import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/Dashboard";
import Form from "./scenes/form";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";

//APOLLO
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import UserManagement from "./scenes/userManagement/UserManagement";
import BrandManagement from "./scenes/brandManagement/BrandManagement";
import StoreManagement from "./scenes/storeManagement/StoreManagement";
import MachineManagement from "./scenes/machineManagement/MachineManagement";



const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`)
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
  let navigate = useNavigate();
  const token = localStorage.getItem('token');
  if (token === null) {
    navigate("/login");
  }

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
                  {/* <Route exact path="/" element={<Dashboard />} /> */}
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/user-management" element={<UserManagement />} />
                  <Route path="/brand-management" element={<BrandManagement />} />
                  <Route path="/store-management" element={<StoreManagement />} />
                  <Route path="/machine-management" element={<MachineManagement />} />
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
