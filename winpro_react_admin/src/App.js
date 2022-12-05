import { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
    <div className="center w85">
      <Topbar />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/user-management"
            element={<UserManagement />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
