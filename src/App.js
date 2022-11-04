import './App.css';
import React, { Suspense} from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import User from './components/Index/User';
import Login from './components/Index/Login';
import ProductDetails from './components/Home/ProductDetails';
import Home from './components/Home/Home';
import UpdateProduct from './components/Home/UpdateProduct';
function App(props) {
  return (
    <>
   <BrowserRouter basename="/productmanagement
">

    <Routes>
      <Route exact path="/productmanagement
" element= {<User/>} />
      <Route  path="/Login" element= {<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/ProductDetails" element={<ProductDetails/>}/>
      <Route path="/updateproduct" element={<UpdateProduct/>}/>
    </Routes>

</BrowserRouter> 

</>
  );
  }

export default App;
