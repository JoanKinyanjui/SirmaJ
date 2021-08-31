import React from 'react';
import '../Footer/Footer.css';

function  Footer(){
    return(
        <>
        <div className='Footer'>
            <div className='column1'>
                <h4>
                   Doctor Herb                </h4>
                <ul className='column2'>
                    <li className='column3'>+254790236990</li>
                    <li className='column3'>doctorherbke@gmail.com</li>
                    <li className='column3'>13997-00100 NRB</li>
                    <li className='column3'>Office Hours </li>
                    <li className='column3'>Mon-Fri 7:00am -8:00pm</li>
                </ul>
            </div>
            <div className='column1'>
                <h4>
                    About Us
                </h4>
                <ul className='column2'>
                    <li className='column3'>Services</li>
                    <li className='column3'>Terms And Conditions</li>
                    <li className='column3'>Privacy Policy</li>
                    <li className='column3'>Help Centre</li>
                </ul>
            </div>
            <div className='column1'>
                <h4>
                      Follw Us
                </h4>
                <ul className='column2'>
                    <li className='column3'><i className="fab fa-facebook "></i></li>
                    <li className='column3'><i className="fab fa-instagram-square "></i></li>
                    <li className='column3'><i className="fab fa-twitter-square "></i></li>
                    <li className='column3'><i className="fab fa-tiktok "></i></li>
                </ul>
            </div>

        </div>
         <div className='hr'>
 &copy;{new Date().getFullYear()}|Doctor Herb|All rights preserved|Terms of Service|Privacy
            </div>
    </>
    )
}
export default Footer;