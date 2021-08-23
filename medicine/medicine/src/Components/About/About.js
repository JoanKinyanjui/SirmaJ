import React from 'react';
import './About.css';
import {Button} from 'react-bootstrap';


function About(){
return(
      <div className='About' style={{backgroundImage:' url(/images/another.jpg)'}}>
        
          <div className='about'>
 <h1>We Provide The TOP Most Medical Services</h1>
 <i class="fas fa-user-md fa-3x"></i>
 <div>
 <Button className='btn' >Make an Appointment</Button>
 <Button className='btn' >Read More</Button>
 </div>
         </div>

      </div>
    )
};


export default About;
