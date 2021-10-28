import React from 'react';
import './About.css';


function Works(){
    return(<>
        <div className='Works'>
            <ul className='works'>
                <li className='lists'><i class="fas fa-clock  "></i></li>
                <li className='lists' ><i class="fas fa-envelope "></i></li>                
                <li className='lists'  ><i class="fas fa-map-marker-alt "></i></li>
            </ul>
            

        
            <ul className='works'>
                <li className='lists'>Mon - Fri (0800hrs - 2100hrs)<br />Sat- Sun(1000hrs - 1600hrs)  </li>
               <a  className='a'href='mailto:glowwke@gmail.com'> <li className='lists' >contact: glowwke@gmail.com</li>  </a>              
                <li className='lists' >KTDA PLAZA 5th Flr Ronald Ngala,
                < br /> H-Hour Security office,<br /> Nairobi, Kenya </li>
            
            </ul>
        </div>
      
        
    
        </>
    )

}
export default Works;