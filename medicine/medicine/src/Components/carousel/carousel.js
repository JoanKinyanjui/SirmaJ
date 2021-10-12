import { Grid } from '@material-ui/core';
import React from 'react';
import './Carousel.css';
import review1 from '../images/review1.png' ;
import review2 from '../images/review2.png';
import review3 from '../images/revioe3.jpg';
import review4 from '../images/reviews4.jpg';


function Reviews(){
    return(
        <>
        <h3>Patient's Reviews</h3>
 <Grid  container className='Gallery'>

           <div className='item'>
              
               <div className='caption'>
It's smooth and doesn't feel heavy on face.
<br />
<h6> Brenda</h6>
               </div>
            </div>
            <div className='item'>
               <div className='caption'>
               And I love how my face feels and looks.
There's a certain glow to it and it feels smooth!
No issues breaking out.
My face normally is not oily but not dry either.
                         <h6>Stella  Oreri</h6>
               </div>
            </div>
            <div className='item'>
               <div className='caption'>
               I use this product on the tops of my hands and it has just enough shimmer to diffuse the look of freckles and brown spots while the
                ingredients work to fade them. Plus it smells really nice and has sunscreen in it to prevent more damage. 
                It also absorbs well and doesn't leave my hands feeling sticky. Great product!
                    <h6>Maria </h6>


               </div>
            </div>

            <div className='item'>
               <div className='caption'>
          This was amazing ,never thought I I'd get rid of the  dark spots.
                    <h6>Nomi </h6>


               </div>
            </div>

</Grid>
</>
    )
}
export default Reviews;