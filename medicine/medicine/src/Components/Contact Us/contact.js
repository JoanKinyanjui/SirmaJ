import React from 'react';
import Nav from '../Navbar/nav';
import './contact.css';

function Contactus(){
    return(
        <>
            <Nav />
        <div className='Contact'>
            <div className='Contactus'>
                  <h5 className='call' >Doctor Herb Head Office Adress:  13997-00100,</h5>
                  <p className='call'>
                  <i class="fas fa-phone-square-alt fa-3x"></i>
                  </p>
                <p className='call'>
                    call: +254790236990/0790240009
                </p>
                <p className='call'><i class="fas fa-envelope fa-3x"></i></p>
                <p className='call'>
                email: doctorherbke@gmail.com
                </p>
                <p className='call'>
                    <i className="fab fa-facebook fa-3x "></i>
                    <i className="fab fa-instagram-square fa-3x "></i>
                    <i className="fab fa-twitter-square fa-3x "></i>
                    <i className="fab fa-tiktok  fa-3x"></i>
                </p>
            </div>
        </div>
            </>
    )
};
export default Contactus;