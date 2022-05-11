import { Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import NavBar from './Components/NavigationBar'
import Footer from './Components/Footer'
import Team from './Components/Team';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <br/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/Team" element={<Team/>} />
     </Routes>
     <br/>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
