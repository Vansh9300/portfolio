import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <h4>useful link</h4>
              <p><i className="icon fa-solid fa-chevron-right mx-2 mt-3"></i>Home</p>
              <p><i className="icon fa-solid fa-chevron-right mx-2 "></i>Servies</p>
              <p><i className="icon fa-solid fa-chevron-right mx-2 "></i>Portfolio</p>
              <p><i className="icon fa-solid fa-chevron-right mx-2 "></i>Team</p>
              <p><i className="icon fa-solid fa-chevron-right mx-2 "></i>Contact</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <h4>our services</h4>
              <p><i className="icon fa-solid fa-chevron-right mx-2 mt-3"></i>Web Design</p>
              <p><i className="icon fa-solid fa-chevron-right mx-2 "></i>Web Development</p>
              <p><i className="icon fa-solid fa-chevron-right mx-2 "></i>Product Management</p>
              <p><i className="icon fa-solid fa-chevron-right mx-2 "></i>Marketing</p>
              <p><i className="icon fa-solid fa-chevron-right mx-2 "></i>Graphic Design</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <h4>CONTACT US</h4>
              <p id="address" className="mt-3">
                C114 DDA flats phase 1<br/>
                Katwaria sarai<br/>
                ND-110016<br/>
                </p>
                <p>
                Phone: +91 9667504349<br/>
                Email: vanshshah930@gmail.com
              </p>
            </div>
          </div>
          </div>
    </footer>
  )
}

export default Footer