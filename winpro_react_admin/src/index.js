import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoginProvider from "./LoginProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";

//APOLLO
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route exact path="/*" element={<App />} />
        <Route path="/login" element={<LoginProvider />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

