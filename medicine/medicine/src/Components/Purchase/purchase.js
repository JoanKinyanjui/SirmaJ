import React from 'react'
import './purchase.css';
import buy03 from '../images/buy02.png';


function Purchase(){

          return(
          <>
          <div className='Pills'>
<div className='pills'>
    <h3>BUY!!!</h3>
<div className='Purchase' id='1'>
<h4>Gloww Cream</h4>
<img  className='gloww' src={buy03}/>
<p>Hot Sale 50g eventone face cream</p>
<h4>Ksh 500</h4>
<div className='text'>
<a href='https://wa.me/254793518270'><i class="fab fa-whatsapp-square fa-3x"></i></a>
<a href='tel:+254790236990'><i class="fas fa-phone-square-alt fa-3x"></i> </a>
</div>

</div>
</div>

</div>
</>
)
              
    

};
export default Purchase;