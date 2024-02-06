
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Signup } from './pages/signup';
import Login from './pages/login';
import UserUpdate from "./components/UserUpdate"


function App() {
  return (
    <div className="App">
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signup/login' element={<Login/>}/>
      <Route path='/userDashboard' element={<UserUpdate/>}/>
    </Routes>
    </div>
  );
}

export default App;
