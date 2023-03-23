import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";

import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gamepay from "./pages/gamepay/Gamepay";
import Alliance from "./pages/alliance/Alliance";
import CloudProgramming from "./pages/cloudProgramming/CloudProgragramming";
import About from "./pages/about/About";
import Footer from "./components/Footer";
import Work from "./pages/work/Work";

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
      <div className="app">
        <Router basename="/">
          <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/work" element={<Work />} />

            {/* PAGES */}
            {/* <Route path="/work" element={<Work />} /> */}
            <Route path="/about" element={<About />} />

            {/* WORKS */}
            <Route path="/work/gamepay" element={<Gamepay />} />
            <Route path="/work/alliance" element={<Alliance />} />
            <Route
              path="/work/cloudprogramming"
              element={<CloudProgramming />}
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
