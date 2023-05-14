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
import BehindTheScene from "./pages/behindTheScene/BehindTheScene";
import XStateDemo from "./pages/xStateDemo/XStateDemo";
import Contact from "./pages/contact/Contact";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );



  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Router basename="/">
          <div>
            { }
          </div>
          <Navbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/work" element={<Work />} />

            {/* PAGES */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* WORKS */}
            <Route path="/work/gamepay" element={<Gamepay />} />
            <Route path="/work/alliance" element={<Alliance />} />
            <Route path="/work/behind-the-scene" element={<BehindTheScene />} />
            <Route
              path="/work/cloudprogramming"
              element={<CloudProgramming />}
            />
            <Route path="/work/xstate" element={<XStateDemo />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
