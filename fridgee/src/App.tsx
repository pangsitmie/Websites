import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './Pages/Welcome';
import Home from './Pages/Home';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config/firebaseConfig';
import AuthRoute from './components/AuthRoute';

initializeApp(firebaseConfig)

function App() {

  return (
    <>
      <Router basename="/">
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
    </>
  )
}

export default App
