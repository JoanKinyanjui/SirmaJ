import React from 'react';
import './About.css';
import {Button} from 'react-bootstrap';


function About(){
return(
<div className='row'>

      

<div className='col-1'>
 <h1>Beautiful Skin , Beautiful You</h1>
 <div className='about1'>
 <h5>The daily facial cream that visibly reveals radiant skin and leaves it glowing. </h5>
 <h5> Anti-Aging Cream + Brightening Treatment + Dark Spot Remover</h5>
 
 <a href='https://wa.me/254790236990'><Button className='btn' >Shop Now</Button></a>
 </div>
 </div>

 <div className='col-2' 
   style={{backgroundImage:' url(/background04.png)'}}>
     
         </div>
      </div>
    )
};


export default About;
