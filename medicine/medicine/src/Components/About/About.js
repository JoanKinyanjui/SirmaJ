import React from 'react';
import './About.css';
import {Button} from 'react-bootstrap';


function About(){
return(
<div className='row'>

      

<div className='col-1'>
 <h1>Beautiful Skin , Beautiful You</h1>
 <div className='about1'>
 <h6>The daily facial cream that visibly reveals radiant skin and leaves it glowing. </h6>
 <h6> Anti-Aging Cream + Brightening Treatment + Dark Spot Remover</h6>
 
 <Button className='btn' >Shop Now</Button>
 </div>
 </div>

 <div className='col-2' 
   style={{backgroundImage:' url(/background04.png)'}}>
     
         </div>
      </div>
    )
};


export default About;
