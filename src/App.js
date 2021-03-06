import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import NavBar from './Components/NavigationBar'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Team from './Components/Team';
import Solutions from './Components/Solutions';
import Gallery from './Components/Gallery';
import Products from './Components/Products';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <br/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/Team" element={<Team/>} />
    <Route path="Contact" element={<Contact/>}/>
    <Route path="Solutions" element={<Solutions/>}/>
    <Route path ="Gallery" element={<Gallery/>}/>
    <Route path ="Products" element={<Products/>}/>
    </Routes>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
