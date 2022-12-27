import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Login from "./scenes/login/Login";

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

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

function LoginProvider() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);


  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default LoginProvider;
