

import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Wishlist from "./components/Wishlist";
import Admin from "./components/Admin";
import Carousel from "./components/Carousel";
import Pagination from "./components/Pagination";
import Review from "./components/Review";


function App() {
  return (
    
    <Router>
   
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/product/:productId" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Wishlist" element={<Wishlist/>} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/Carousel" element={<Carousel/>} />
          <Route path="/Pagination" element={<Pagination/>} />
          <Route path="/Review" element={<Review/>} />
          <Route path="/ProductScreen" element={<ProductScreen/>} />




        </Routes>       
      </main>
    </div>
    <Footer/>
    </Router>
    
    
  );
}

export default App;
