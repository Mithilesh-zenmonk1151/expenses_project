
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Signup } from './pages/signup';
import Login from './pages/login';
import Update from './components/Update';


function App() {
  return (
    <div className="App">
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signup/login' element={<Login/>}/>
      <Route path='/userDashboard' element={<Update/>}/>
    </Routes>
    </div>
  );
}

export default App;
