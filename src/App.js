import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import LoginSignup from './pages/loginSignup';
import Shop from './pages/shop';
import Category from './pages/category';
import Product from './pages/product';
import Cart from './pages/cart';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Category category="men"/>} />
          <Route path='/women' element={<Category category="women"/>} />
          <Route path='/kids' element={<Category category="kids"/>} />
          <Route path='/offers' element={<Category category="offers" />} />
          <Route path='/product' element={<Product />} />
          <Route path=':productID' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
