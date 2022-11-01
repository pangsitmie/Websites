import React from 'react'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Line from './components/linePage/Line'
import SearchSystem from './components/searchSystemPage/SearchSystem'
import MarketingSystem from './components/marketingSystemPage/MarketingSystem'
import Ipickpro from './components/ipickproPage/Ipickpro'
import Xiaodi from './components/xiaodiPage/Xiaodi'
import GalaxyCity from './components/galaxyCityPage/GalaxyCity'


// shortcut is "rafce"
//header already contains cloud3d, nav, and hero components
const App = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
            else {
                entry.target.classList.remove('show');
            }
        })
    });

    const hiddenElements = document.querySelectorAll('hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return (
        <>
            <Router basename="/">
                {/* Add Menu Component */}
                <Nav />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    {/* 商務合作 */}
                    <Route path='/line' element={<Line />} />
                    <Route path='/search-system' element={<SearchSystem />} />
                    {/* 服務平台 */}
                    <Route path='/marketing-system' element={<MarketingSystem />} />
                    <Route path='/xiaodi' element={<Xiaodi />} />

                    {/* 遊戲娛樂 */}
                    <Route path='/ipickpro' element={<Ipickpro />} />
                    <Route path='/galaxy-city' element={<GalaxyCity />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App