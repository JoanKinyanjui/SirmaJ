import React from 'react';
import './account.css';
import {Divider,TextField} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {Person} from "@material-ui/icons";


function Login(){
    return(
        <>
         <div><h2>DOCTOR HERB  <i class="fas fa-leaf"></i></h2></div>
        <div className='LoginBox'>

            <div className='Login'>
               <div className='icon'>
                   <Person fontSize='large'/>
               </div>
               <div className='LoginWord'>Log In</div>
            </div>
            <div className='row'>
                <div className='col-8 m-4'>
                    <TextField className='p-2' type='text' id='email' variant='outlined' label='enter email' fullWidth/>
                    <TextField   className='p-2' type='text' id='password' variant='outlined' label='enter password' fullWidth/>
                    <Button variant='contained' color='primary' fullWidth>Login</Button>
                </div>
            </div>
            <Divider variant='fullWidth'/>
            <Link to='/signup'>
                <h5>Create Account</h5>
            </Link>

        </div>
            </>

    )
}
export default Login;