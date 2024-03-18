import './App.css';
import Buynow from './components/buynow/Buynow';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Navbaar from './components/header/Navbaar';
import Maincomp from './components/home/Maincomp';
import Nav2 from './components/newnavbaar/Nav2';
import Newnav from './components/newnavbaar/Newnav';
import SignUp from './components/signup_sign/SignUp';
import Sign_in from './components/signup_sign/Sign_in';
import {Routes,Route, } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbaar/>
      {/* <Nav2/> */}
      <Newnav/>
      <Routes>
        <Route path='/' element={<Maincomp/>}/>
        <Route path='/login' element={<Sign_in/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/getproductsone/:id' element={<Cart/>}/>
        <Route path='/buynow' element={<Buynow/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
