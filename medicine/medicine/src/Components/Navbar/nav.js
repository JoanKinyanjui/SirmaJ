import React ,{useState}from 'react';
import { NavItems } from './Navitems';
import '../Navbar/Nav.css';
import {Link} from 'react-router-dom';

 


function Nav(){
    return(
        <div className='Nav'>
             <div><h2 className='glow'>Gloww</h2></div>
            <nav className='navbar navbar-light'>
 
               <div className='nav-items'>
                 <ul className='nav'>
                     {NavItems.map((item,id)=>{
                         return(
                            <Link to={item.path} className={item.cName}>
                                 <li >{item.title}</li>
                            </Link>
                         )
                     }
                         )}
                 </ul>
               </div>
              
            </nav>

        </div>
    )
}
export  default Nav;