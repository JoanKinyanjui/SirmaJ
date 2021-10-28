import React from 'react'
import Nav from '../Navbar/nav'
import logo from '../images/logo1.png';
import './faqs.css';

function Faqs() {
    return (
        <>
        <Nav />
        <div className='frequent'>
            <h2>Simplify Your Skincare</h2>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi1s5G2FoQcbjrKSznz88xcsrRp452MWHN4g&usqp=CAU' />
            
<p>
            <h4>FREQUENTLY ASKED QUESTIONS</h4>
            </p>
            <div className='question'>
            How long before I start to see results?<br />
Results can vary by individual and what products you are using. How consistent you are with your skincare routine
 plays an important role in the success of your results. At Gloww , we love to 
 under-promise and over-deliver, thus we give a baseline of 7days-14days for you to note the change in the
 the lightening of the spots,uniformity of the skin tone and overall glow. Results may be seen sooner than this baseline.




            </div>

            <div  className='question'>
                Why is knowing your skin type important?<br />
  The first part of your skincare journey is to know your skin, and we mean really know it. Paying attention to your skin is especially important if you struggle with different skin concerns. You’ll be able to narrow down all those products in the isles of endless cosmetics and skincare products. If you don’t know your skin type, you could potentially harm your skin barrier with ingredients that are too harsh for your skin or ingredients that aren’t compatible with your skin.


            </div>
            <div className='question'>
            How Many Steps Should I Have?<br />
            Cleansing: helps remove impurities on the skin and is definitely necessary at night! Find one with a low ph so your skin doesn’t feel stripped.< br />
Toning: helps balance the skin and brings essential nutrients and a great way to prep the skin before moisturizer. <br />
Moisturizing: important to help protect your skin and skin barrier! This will also help lock in hydration from your toner. 

            </div>
           
            <div className='question1'>
            What is the men's skincare routine?<br />
            Moisturize Daily
Moisturizer will help protect your skin barrier and also help reduce the appearance of fine lines and wrinkles. You'll also want to add in some sheet masks here and there to ensure your skin is properly hydrated! 
<br />

Wear Sunscreen<br />
Sunscreen is super important for protecting your skin from UV damage and skin cancer. It also helps prevent any further damage to the skin and can minimize the darkening of a dark spot.
<br />
Avoid Bar Soaps as a Facial Cleanser<br />
You heard us! Bar soaps that are meant for your body should not be used on your face. The skin on your face is a bit more sensitive. It's best to go with gentle facial cleansers that won't strip your skin of moisture. 

Shave While Skin is Wet & Moisturize After Shaving<br />
Protect your precious skin barrier! That's pretty much it. Doing these simple steps when you shave will make sure your skin barrier is comfortable and healthy. Not prepping your skin before shaving won't be good! Not only will it damage your skin barrier but it can also lead to ingrown hairs, razor burns, and skin irritations. 
<br />
Be gentle<br />
Again, don't be rough. Use gentle patting and massaging motions to help a product sink in better. Being gentle will also help minimize any potential redness that may occur from rubbing, scrubbing, or harshly patting the skin. 


             </div>
             <img className='logo' src={logo}/>
        </div>
        </>
    )
}

export default Faqs
