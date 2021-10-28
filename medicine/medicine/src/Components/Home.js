import React, { useEffect, useState } from 'react';
import Works from './About/Works';
import About from './About/About';
import Doctors from './Our Doctors/Doctors';
import Service from './Our Services/Service';
import Purchase from './Purchase/purchase';
import Reviews from './carousel/carousel';
import Footer from './Footer/Footer';
import Popup from './Popup/Popup';
import Nav from './Navbar/nav';


function Home(){
const [timedPopup,setTimedPopup] =useState(false);
useEffect( ()=>{
    setTimeout( ()=>{
        setTimedPopup(true);
    } ,7000 );
},[]);

    return(
        
<div>

       <Nav />
       <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
      <h5>Subscribe to our Email</h5>
      <form>
                
                <input type='text' className='input' name='email' placeholder='@gmail.com'/>
                <button className='btn' type='submit'>Submit</button>
            </form>
       </Popup>
       <About />
       <Works />
       <Doctors />
       <Service/>
      <Purchase />
      <Reviews />
       <Footer />

       
</div>
    

            
    )
};
export default Home;