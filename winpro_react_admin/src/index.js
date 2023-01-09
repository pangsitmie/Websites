import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoginProvider from "./LoginProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GetManagerAccessToken } from "./graphQL/Queries";


import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";

//APOLLO
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, useQuery, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';




// async function refreshToken() {
//   try {

//     const response = await client.query({
//       query: GetManagerAccessToken,
//       variables: {
//         variables: {
//           refreshToken: "Bearer " + localStorage.getItem('login_token')
//         }
//       }, // Replace with your own function to retrieve the refresh token
//     });
//     const newAccessToken = response.data.getManagerAccessToken;
//     client.writeData({ data: { token: newAccessToken } });
//     localStorage.setItem('token', newAccessToken);
//     console.log(localStorage.getItem('token'));
//   } catch (error) {
//     console.error(error);
//   }
// }
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(async ({ message, location, path }) => {

      if (message === "Token過期") {
        console.log("TOKEN EXPIRES")
        const login_token = localStorage.getItem('login_token');
        localStorage.removeItem('token');

        // Create the query document
        const query = gql`
          query GetManagerAccessToken($refreshToken: String!) {
            getManagerAccessToken(refreshToken: $refreshToken)
          }
        `;

        // Use the client.mutate method to make the query
        const { data } = await client.mutate({
          mutation: query,
          variables: {
            refreshToken: `Bearer ${login_token}`,
          },
        });

        const newToken = data.getManagerAccessToken;
        console.log("NEW TOKEN: ")
        console.log(newToken);
        // Store the new token in local storage
        localStorage.setItem('token', newToken);




        // ==================
        // Create the query document for the query you want to refetch
        const refetchQuery = gql`
        query Query {
          healthCheck
        }
        `;

        // Use the client.query method to refetch the query, passing in the context option to set the headers with the new token
        await client.query({
          query: refetchQuery,
          context: {
            headers: {
              authorization: `Bearer ${newToken}`,
            },
          },
        });
        // =================
      }
      else {
        alert(`Graphql error ${message}`)
      }
    })
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://market-test.cloudprogrammingonline.com/graphql/" })
]);

const authLink = setContext((_, { headers }) => {
  // Get the access token from local storage
  const token = localStorage.getItem('token');

  // Return the headers to the context, including the authorization header if the token is not null
  return {
    headers: {
      ...headers,
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // link: link

  //Use this if you want to use authLink
  link: authLink.concat(link)
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>

    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route exact path="/*" element={<App />} />
          <Route path="/login" element={<LoginProvider />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>

  </ApolloProvider>

);

