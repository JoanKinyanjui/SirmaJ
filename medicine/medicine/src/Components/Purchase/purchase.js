import React from 'react'
import './purchase.css';
import { useCart } from 'react-use-cart';
import Cart from './Cart';



function Purchase(){
    const {addItem} = useCart();
 
   

          return(<div className='Pills'>
<div className='pills'>
<div className='Purchase' id='1'>
<h4>Sirma Powder</h4>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6cYj1a4UAPVVK3_Q8Jy4jRZYybnJ3xBEQQ&usqp=CAU'/>
<p>Hot Sale 50-1000g Increase Sexual Desire</p>
<h4>Ksh 1500</h4>
<button onClick={addItem}> Add to Cart <i class="fas fa-cart-plus"></i></button>

</div>
</div>
<Cart />
</div>
)
              
    

};
export default Purchase;