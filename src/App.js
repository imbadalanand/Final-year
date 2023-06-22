

import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import AdminLogin from "./components/Admin/AdminLogin";
import Carousel from "./components/Carousel";
import Review from "./components/Review";
import Admin from "./components/Admin/Admin";
import Search from "./components/Search";
import User from "./components/Admin/User/User";
import UserCreate from "./components/Admin/User/UserCreate";
import UserDetail from "./components/Admin/User/UserDetail";
import UserEdit from "./components/Admin/User/UserEdit";
import Product from "./components/Admin/Product/Product";
import ProductCreate from "./components/Admin/Product/ProductCreate";
import ProductDetails from "./components/Admin/Product/ProductDetails";
import ProductEdit from "./components/Admin/Product/ProductEdit";
import Order from "./components/Admin/Order/Order";
function App() {
  console.log(process.env);
  return (

    
    
    <Router>
   
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          
         
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/product/:productId" element={<ProductScreen />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/AdminL" element={<AdminLogin />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Carousel" element={<Carousel/>} />
          <Route path="/Review" element={<Review/>} />
          <Route path="/ProductScreen" element={<ProductScreen/>} />
          <Route path="/Search/:searchid" element={<Search/>} />
          <Route path="/User" element={<User/>} />
          <Route path="/user/create" element={<UserCreate/>} />
          <Route path="/user/detail/:userid" element={<UserDetail/>} />
          <Route path="/user/edit/:userid" element={<UserEdit/>} />
          <Route path="/Product" element={<Product/>} />
          <Route path="/product/create" element={<ProductCreate/>} />
          <Route path="/product/detail/:productid" element={<ProductDetails/>} />
          <Route path="/product/edit/:productid" element={<ProductEdit/>} />
          <Route path="/Order" element={<Order/>} />

            </Routes>
          </main>
        </div>
        <Footer />
      </Router>




  );
}

export default App;
