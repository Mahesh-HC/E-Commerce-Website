
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';



function App() {
  return (
    <div>
      <Navbar></Navbar>
   
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/products/:id" element={<Product></Product>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        
      </Routes>

    </div>
  );
}

export default App;
