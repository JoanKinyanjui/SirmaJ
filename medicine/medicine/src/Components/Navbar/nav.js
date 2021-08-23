import React from 'react';
import { NavItems } from './Navitems';
import '../Navbar/Nav.css';
import {Link} from 'react-router-dom';
import { Badge, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';


function Nav(){
    return(
        <div className='Nav'>
            <nav className='navbar navbar-light'>
                <div><h2>DOCTOR HERB  <i class="fas fa-leaf"></i></h2></div>
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
                          <Link to='/account'>
                        <li className='items'><i className="fas fa-user-circle fa-1.5x"></i></li>
                    </Link>
                    <Link to='/account'>
                        <li className='items'>
                            <IconButton>
                                <Badge badgeContent={3} color='secondary'>
                                 <ShoppingCart />  
                                </Badge>
                                </IconButton>
                            </li>
                    </Link>
                 </ul>
               </div>
            </nav>

        </div>
    )
}
export  default Nav;