import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Studentreg from './pages/Studentreg';
import Admindash from './pages/Admindash';
import Studentdash from './pages/Studentdash';
import { Routes, Route  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/studentreg" element={<Studentreg />} />
      <Route path="/admindash" element={<Admindash />} />
      <Route path="/studentdash" element={<Studentdash />} />
      </Routes>
    </div>
  );
}

export default App;
