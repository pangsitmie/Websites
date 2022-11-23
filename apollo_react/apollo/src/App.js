import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        {/* <Route path='/login' element={<Homepage />} /> */}

      </Routes>
    </div>
  );
}

export default App;
