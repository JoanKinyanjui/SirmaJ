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
            </div>

        <div className='Works'>
            <ul className='works'>
                <li className='lists'>Mon - Fri (0800hrs - 2100hrs)<br />Sat- Sun(1000hrs - 1600hrs)  </li>
                <li className='lists' >contact: doctorherb@gmail.com</li>                
                <li className='lists' >Ngara,Nairobi. <br />Firstfloor,Makini House</li>
            
            </ul>
        </div>
      
        
    
        </>
    )

}
export default Works;