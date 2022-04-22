import React, { useState } from 'react'
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Hero from './Hero';
import Skills from './Skills';
import Navbar from './Navbar'
import './style.css'
import Contact from './Contact';
import Filter from './Filter';
import Loader from './Loader';
import Footer from './Footer';
const App = () => {
  const[loading,loadData]=useState();
  useEffect(()=>{
    loadData(true);
    const timing=setTimeout(()=>{
        loadData(false);
    },4000);
},[])
  return (
    <>
    {loading && <Loader/>}
    {!loading && <Router>
      <Switch>
        <Route exact path='/'>
          <Navbar />
          <Hero />
          <Skills />
          <Filter />
          <Contact />
          <Footer />
        </Route>
        <Route exact path='/about'>
        <Navbar />
          <Skills />
          <Footer />
        </Route>
        <Route exact path='/contact'>
        <Navbar />
          <Contact />
          <Footer />
        </Route>
      </Switch>
      </Router>}
    </>
  )
}

export default App
