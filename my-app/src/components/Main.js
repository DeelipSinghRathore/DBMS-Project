import React from 'react'
import Navbar from "./Navbar"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "../Pages/Home";
import Reports from '../Pages/Reports';
import Products from '../Pages/Products';
const Main = () => {
    return (
        <>
      <Router>
        <Navbar />    
          <Route path='/' exact element={Home} />
          <Route path='/reports' element={Reports} />
          <Route path='/products' element={Products} />
      </Router>
    </>
    )
}

export default Main
