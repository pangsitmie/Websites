import React, { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Main from "./pages/main/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from "./components/404/NotFound";
import Privacy from "./pages/privacy/Privacy";
import Contact from "./pages/contact/Contact";
import Work from "./pages/work/Work";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />

        <Routes>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />

          <Route exact path="/" element={<Main />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
