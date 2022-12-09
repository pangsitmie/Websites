import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/Dashboard";
import Form from "./scenes/form";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";

//APOLLO
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import UserManagement from "./scenes/userManagement/UserManagement";
import Login from "./scenes/login/Login";
import BrandManagement from "./scenes/brandManagement/BrandManagement";
import StoreManagement from "./scenes/storeManagement/StoreManagement";
import MachineManagement from "./scenes/machineManagement/MachineManagement";





function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);



  return (
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
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/form" element={<Form />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/brand-management" element={<BrandManagement />} />
              <Route path="/store-management" element={<StoreManagement />} />
              <Route path="/machine-management" element={<MachineManagement />} />
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
