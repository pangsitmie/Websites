import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './Pages/Welcome';
import Home from './Pages/Home';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config/firebaseConfig';
import AuthRoute from './components/AuthRoute';
import Navbar from './components/navbar/Navbar';
import { SelectedPage } from './shared/types';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';




initializeApp(firebaseConfig)

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router basename="/">
          <Navbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Routes>
            <Route path="/"
              element={
                <AuthRoute>
                  <Home />
                </AuthRoute>
              }
            />
            {/* <Route path="*" element={<Home />} /> */}
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
