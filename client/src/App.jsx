import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import CheckOut from './pages/CheckOut';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Register from './pages/Register';
import ShopDetails from './pages/ShopDetails';
import ShopList from './pages/ShopList';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Forgotpass from './pages/forgotpass';
import CreateFood from './components/foodCreate';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shoplist" element={<ShopList />} />
        <Route path="/shopdetails" element={<ShopDetails />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgotpass" element={<Forgotpass />} />
        <Route path="/createmenu" element={<CreateFood />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
