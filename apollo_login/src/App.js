import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Coordinate from './pages/Coordinate';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/coordinate' element={<Coordinate />} />
      </Routes>
    </div>
  );
}

export default App;
