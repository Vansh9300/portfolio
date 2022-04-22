import React from 'react'
import Heroimg from './images/model.png'
const Hero = () => {
  return (
    <>
    <br></br>
    <div className="container">
  <div className="row">
    <div className="col-lg-6 col-md-6">
      <img className='img-fluid' src={Heroimg}></img>
    </div>
    <div className="col-lg-6 col-md-6" id='hero-text'>
      <h1>Hello,I am Vansh</h1>
      <p>Hello my name is Vansh shah and i have created this website from scratch using html,css,javacsript and react.</p>
    <button className='btn btn-primary' id='hero-btn'>My portfolio</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Hero