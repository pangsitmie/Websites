import React from 'react'
import Header from './components/header/Header'
import RecentProject from './components/recentProject/RecentProject'
// shortcut is "rafce"
//header already contains cloud3d, nav, and hero components
const App = () => {
    return (
        <>
            <Header />
            <RecentProject />
        </>
    )
}

export default App