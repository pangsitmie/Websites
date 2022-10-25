import React from 'react'
import DropdownMenu from './components/dropdown/DropdownMenu'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import RecentProject from './components/recentProject/RecentProject'
import Service from './components/service/Service'
// shortcut is "rafce"
//header already contains cloud3d, nav, and hero components
const App = () => {
    return (
        <>
            <Header />
            <RecentProject />
            <Service />
            <Footer />
        </>
    )
}

export default App