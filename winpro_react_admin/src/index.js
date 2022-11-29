import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './scenes/login/Login';


import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";

//APOLLO
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import UserManagement from "./scenes/userManagement/UserManagement";
import Dashboard from './scenes/dashboard/Dashboard';


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

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <ApolloProvider client={client}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
        {/* <Routes>
          <Route path="/" element={<App />} /> 
          <Route path="/app" element={<App />} />
        </Routes> */}


      </BrowserRouter>
    </React.StrictMode>
  </ApolloProvider >
);

