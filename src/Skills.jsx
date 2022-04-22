import React from 'react'
import Skillimg from './images/skill2.png'
const Skills = () => {
  return (
    <>
    <h1 className='text-center my-4' style={{color:'#44dfc4'}}>Skills</h1>
    <br></br>
    <div className="container">
  <div className="row">
  <div className="col-lg-6 col-md-6">
    <h2 className='mb-4'>My Experties</h2>
    <div className='expertise mt-3'>
        <h5>Hyper Text Markup Language(HTML)</h5>
        <p>I have 1 year of experience in HTML and completed a bit projects in it.</p>
        <h5 className='mt-4'>Cascading stylesheets(CSS)</h5>
        <p>I have 1 year of experience in CSS and completed a bit projects in it.</p>
        <h5 className='mt-4'>Javacsript(JS)</h5>
        <p>I have 1 year of experience in JS and completed a bit projects in it.</p>
    </div>
    </div>
    <div className="col-lg-6 col-md-6">
      <img className='img-fluid' src={Skillimg}></img>
    </div>
  </div>
</div>
    </>
  )
}

export default Skills