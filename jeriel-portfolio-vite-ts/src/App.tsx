import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";

import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gamepay from "./pages/gamepay/Gamepay";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* <div className="app"> */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gamepay" element={<Gamepay />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
