import { BrowserRouter,Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import About from "./pages/About";
import Products from "./pages/Products";
import Recipes from "./pages/Recipes"
import Kids from "./pages/Kids";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import './fonts/fonts.css';
import './fonts_1/fontsmon.css';
import Navbar from './Navbar';
import Footer from "./Footer";


function App() {

  
  return <BrowserRouter>

  <>
  <Navbar />
  </>

 
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} />
    <Route path="/recipes" element={<Recipes />} />
    <Route path="/kids" element={<Kids />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>

  <Footer/>
</BrowserRouter>  




   
}

export default App;
