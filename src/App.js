import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Hero from './Components/Hero';
// import Analytics from './Components/Analytics';
// import Newsletter from './Components/Newsletter';
// import Cards from './Components/Cards';
// import Footer from './Components/Footer';
// import Login from './Components/Login';
// import SignUp from './Components/SignUp';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';





function App() {
  return (
   <>
   
  
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/signup" element={<SignUp />} /> 
      <Route path="/login" element={<Login />} />
      
    </Routes>
   
  </Router>
  
  

  
  
    
   </>
  );
}

export default App;
