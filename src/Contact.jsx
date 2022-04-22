import React from 'react'
import Contactimg from './images/contact.svg'
import $ from 'jquery'
const Contact = () => {
  return (
    <>
    <h1 className='text-center my-4' style={{color:'#44dfc4'}}>CONTACT ME</h1>
    <img className='img-fluid' src={Contactimg} style={{height:'40vh',margin:'2px auto',display:'flex'}}></img>
    <div className="container my-4" id='contact'>
  <div className="row" style={{gap:'0px 0px'}}>
    <div className="col-lg-6 col-md-6 col-sm-12">
    <input type="text" className="form-control my-2" id="exampleFormControlInput1" placeholder="Name" />
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12">
    <input type="text" className="form-control my-2" id="exampleFormControlInput1" placeholder="Email" />
    </div>
  </div>
  <input type="email" className="form-control my-2 " id="exampleFormControlInput1" placeholder="Subject" />
  <textarea className="form-control mt-3" id="exampleFormControlTextarea1" rows="4" style={{resize:'none'}} placeholder='Message'></textarea>
<button className='btn btn-primary my-3' id='submit' style={{color:'white',display:'flex',margin:'2px auto'}}>Submit</button>
</div>
<div className='data1'></div>
    </>
  )
}

export default Contact