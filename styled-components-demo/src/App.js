import { ThemeProvider } from "styled-components";
import React from "react";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import { theme } from './Theme'
import GlobalStyle from "./components/styles/Global";
import Card from "./components/Card";
import content from "./content";
import Footer from "./components/Footer";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>

        <GlobalStyle />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );

}

export default App;
