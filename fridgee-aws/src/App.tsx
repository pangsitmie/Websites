import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import PremiumContent from './pages/PremiumContent'

function App() {
  return (
    <>
      <Router>
        <div>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/premium"}>Premium</NavLink>
        </div>

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/premium"} element={<PremiumContent />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
