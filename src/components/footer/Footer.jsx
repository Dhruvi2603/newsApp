import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='d-flex justify-content-between align-items-center py-4 px-5' style={{ backgroundColor: '#36454F', color: 'white' }}>
        <div className='mt-5 mb-5'>
          <p className='fs-1 fw-bold mb-1'>Sign Up For Newsletter</p>
          <p className='fs-5'>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='d-flex'>
          <input type="text" className='form-control form-control-lg me-2' placeholder='Email address' style={{ width: '300px' }} />
          <button className='btn btn-primary btn-lg'>Subscribe</button>
        </div>
      </div>
      <div className='py-5' style={{ backgroundColor: '#e0e0e0' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <h5>Spotlight News</h5>
              <div>
                <i className="bi bi-instagram me-4"></i>
                <i className="bi bi-twitter me-4"></i>
                <i className="bi bi-facebook me-4"></i>
                <i className="bi bi-whatsapp"></i>
              </div>
            </div>
            <div className='col-md-3'>
              <h5>Company</h5>
              <ul className='list-unstyled'>
                <li>About</li>
                <li>Contact</li>
                <li>Our Staff</li>
                <li>Advertise</li>
              </ul>
            </div>
            <div className='col-md-3'>
              <h5>Tech News</h5>
              <ul className='list-unstyled'>
                <li>Sports</li>
                <li>Health</li>
                <li>Science</li>
                <li>Entertainment</li>
              </ul>
            </div>
            <div className='col-md-3'>
              <h5>Tech News</h5>
              <ul className='list-unstyled'>
                <li>Games</li>
                <li>Business</li>
                <li>General</li>
                <li>Technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="border-dark mt-0" />
      <div class=" d-flex justify-content-center">
         <p class="ms-5">Copyright © 2024 Spotlight News. Powered by Spotlight News.</p>
      </div>

    </>
  );
}

export default Footer;
