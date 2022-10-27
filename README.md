import './App.css';
import React, { Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './components/Index/User';
import Login from './components/Index/Login';
import ProductDetails from './components/Home/ProductDetails';
import Home from './components/Home/Home';
function App(props) {
  return (
    <>
  <Router>
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route  path="/" element= {<User/>} />
      <Route  path="/Login" element= {<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/ProductDetails" element={<ProductDetails/>}/>
    </Routes>
  </Suspense>
</Router>
</>
  );
  }

export default App;
