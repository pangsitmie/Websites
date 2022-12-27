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
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';



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

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');

  if (token = null) {
    console.log("asdf" + token + "asdf")
  }
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // authorization: token ? `Bearer ${token}` : "",
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ0b2tlblR5cGUiOiJBQ0NFU1MiLCJyb2xlIjoiTUFOQUdFUiIsInBsYXRmb3JtIjoiV0VCIiwiaWF0IjoxNjcyMTEwMTAwLCJleHAiOjE2NzIxMTE5MDB9.yICT4aubE2GVv6-z1x7gx8_hkupfp8DVnfIjbBQ4mqE`,
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // link: link

  //Use this if you want to use authLink
  link: authLink.concat(link)
});

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <BrowserRouter>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider >

  </BrowserRouter>
);

