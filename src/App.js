// import logo from './logo.svg';
import './App.css';
import Login from './componenets/Login';
import Signup from './componenets/Signup';
import HomePage from './pages/HomePage';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
