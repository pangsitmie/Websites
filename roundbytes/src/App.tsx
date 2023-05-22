import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";

import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bearpay from "./pages/bearpay/Bearpay";
import Alliance from "./pages/alliance/Alliance";
import CloudProgramming from "./pages/cloudProgramming/CloudProgragramming";
import About from "./pages/about/About";
import Footer from "./components/Footer";
import Projects from "./pages/projects/Projects";
import BehindTheScene from "./pages/behindTheScene/BehindTheScene";
import XStateDemo from "./pages/xStateDemo/XStateDemo";
import Contact from "./pages/contact/Contact";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );



  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router basename="/">
          <Navbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/projects" element={<Projects />} />

            {/* PAGES */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* WORKS */}
            <Route path="/projects/bearpay" element={<Bearpay />} />
            <Route path="/projects/alliance" element={<Alliance />} />
            <Route path="/projects/behind-the-scene" element={<BehindTheScene />} />
            <Route
              path="/projects/cloudprogramming"
              element={<CloudProgramming />}
            />
            <Route path="/projects/xstate" element={<XStateDemo />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
