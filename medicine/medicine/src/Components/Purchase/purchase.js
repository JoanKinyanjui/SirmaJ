import React from 'react';
import { useCart } from 'react-use-cart';
import './purchase.css';
import Cart from '../Cart/Cart';

const Product=[{
    id: 1,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6cYj1a4UAPVVK3_Q8Jy4jRZYybnJ3xBEQQ&usqp=CAU',
    name: "Malm",
    price: 'ksh 9900',
    desc: 'Hot Sale 50-1000g Increase Sexual Desire',
    quantity: 1

},
{
    id: 1,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6cYj1a4UAPVVK3_Q8Jy4jRZYybnJ3xBEQQ&usqp=CAU',
    name: "Malm",
    price: 'ksh 9900',
    desc: 'Hot Sale 50-1000g Increase Sexual Desire',
    quantity: 1

}];
function Purchase(){
const {addItem}= useCart;
    return(<>
    <div className='pills'>Order Now</div>
        <div className='Purchase'>
            
         {Product.map((product,id) =>{
             return(
                <div className='productcard'>
                 <img src={product.image}/>
                 <h4>{product.name}</h4>
                 <p>{product.desc}</p>
                 <h3> {product.price}</h3>
                 <button onClick={() => addItem(product)}>Add to cart</button>

                 </div>
             )
         })}
        </div>
   <Cart />
   </>
    )

};
export default Purchase;