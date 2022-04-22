import React from 'react'
import { useState } from 'react';
import Aboutfil from './Aboutfil';
import Skillfil from './Skillfil';
import Expereice from './Expereice';
const Filter = () => {
    const [data,setData]=useState(Aboutfil);
    const aboutBtn=()=>{
        setData(Aboutfil)
    }
    const skillBtn=()=>{
      setData(Skillfil)
    }
    const experienceBtn=()=>{
      setData(Expereice)
    }
  return (
    <>
    <br></br>
    <div className="container">
  <div className="row">
    <div className="col-lg-5" id='sideimg'>
    </div>
    <div className="col-lg-7">
    <div className="container">
  <div className="row" style={{gap:'10px'}}>
    <div className="col-lg-2 col-md-2 col-sm-2">
      <button className='btn btn-primary filter_btn' onClick={aboutBtn}>about</button>
    </div>
    <div className="col-lg-2 col-md-2 col-sm-2">
    <button className='btn btn-primary filter_btn' onClick={skillBtn}>skills</button>
    </div>
    <div className="col-lg-2 col-md-2 col-sm-2">
    <button className='btn btn-primary filter_btn'  onClick={experienceBtn}>experience</button>
    </div>
  </div>
</div>
<div className='container'>
    {data}
    </div>
    </div>
  </div>
</div>
<br></br>
    </>
  )
}

export default Filter