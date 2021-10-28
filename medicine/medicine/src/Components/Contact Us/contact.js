import React from 'react';
import Nav from '../Navbar/nav';
import logo from '../images/logo1.png';
import '../Contact Us/style.css';

function Contactus(){
    return(
        <>
            <Nav />
        <div className='Contact'>
          <div className='contact'>

              <div className='contactus'>
                  <h5>Gloww Shop Address : 13997-00100</h5>
              </div>

              <div className='contactus'>
                  <a className='a' href='tel:+254790236990'><h5>Call:+254793518270</h5></a>
              </div>

              <div className='contactus'>
                  <a className='a' href='mailto:glowwke@gmail.co.ke' ><h5>email:glowwke@gmail.com</h5></a>
              </div>

              <div className='grid-container'>
                  <div className='grid-item'>
                      <div><a className='col-1'><i className="fab fa-facebook fa-3x "></i></a></div>
                      <div> <a className='col-1'><i className="fab fa-instagram-square fa-3x "></i></a></div>
                      <div> <a className='col-1'><i className="fab fa-twitter-square fa-3x "></i></a></div>
                      <div></div><a className='col-1'><i className="fab fa-tiktok  fa-3x"></i></a></div>
                  </div>
              </div>
    
            
            <img className='logo' src={logo}/>
        </div>
            </>
    )
};
export default Contactus;