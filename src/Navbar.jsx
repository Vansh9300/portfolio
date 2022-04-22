import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Navbar = () => {
    function off(){
        console.log("you clikced")
        var navbarNav=document.querySelector("#navbarres");
        var body=document.querySelector("body");
          navbarNav.classList.add("off");
          body.classList.add("flow");
          navbarNav.classList.remove("flow");
    }
    function closeoff(){
        var navbarNav=document.querySelector("#navbarres");
        var body=document.querySelector("body");
        navbarNav.classList.remove("off");
        navbarNav.classList.add("animate");
        body.classList.remove("flow");
    }
    const closeoff3=(e)=>{
      var data=e.target;
      var allData=document.querySelectorAll('.nav-link')
      allData.forEach(curlElem => {
        curlElem.classList.remove("active")
      });
      data.classList.add('active');
      var navbarNav=document.querySelector("#navbarres");
      var body=document.querySelector("body");
      navbarNav.classList.remove("off");
      navbarNav.classList.add("animate");
      body.classList.remove("flow");
    }
  return (
    <>
       <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-none py-3 " id="navlight">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarres" aria-controls="navbarres" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" id="toggle" onClick={off} style={{color:'#44dfc4'}}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarres">
            <span className="close-btn" onClick={closeoff}><i className="fa-solid fa-xmark"></i></span>
            <ul className="navbar-nav" id="menu">
              <li className="nav-item">
                <Link className="nav-link active" to="/" data-val="Home" onClick={closeoff3}>Home</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to="/about" data-val="About" onClick={closeoff3}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" data-val="Contact" onClick={closeoff3}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
      <br></br>
    </>
  )
}

export default Navbar