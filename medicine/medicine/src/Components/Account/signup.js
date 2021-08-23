import React from 'react';
import './account.css';
import {Divider,TextField} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {PersonAdd} from "@material-ui/icons";



function Signup(){
    return(
<>
<div><h2>DOCTOR HERB  <i class="fas fa-leaf"></i></h2></div>
        <div className='LoginBox'>

           <div className='Login'>
               <div className='icon'>
                   <PersonAdd fontSize='large'/>
               </div>
               <div className='LoginWord'>Sign Up</div>
            </div>
            <div className='row'>
                <div className='col-8 m-4'>
                    <TextField className='p-2' type='text' id='first name' variant='outlined' label='first name' fullWidth={true}/>
                    <TextField   className='p-2' type='text' id='last name' variant='outlined' label='last name' fullWidth/>
                </div>
            </div>
            <div className='row'>
                <div className='col-8 m-4'>
                    <TextField className='p-2' type='text' id='email' variant='outlined' label='enter email' fullWidth={true}/>
                    <TextField   className='p-2' type='text' id='password' variant='outlined' label='enter password' fullWidth/>
                    <TextField   className='p-2' type='text' id='password' variant='outlined' label='confirm password' fullWidth/>
                </div>
            </div>
            <div>
                    <Button variant='contained' color='primary' fullWidth>Create Account</Button>
            </div>
            <Divider variant='fullWidth'/>
            <Link to='/Login'>
                <h5>Already have an Account.</h5>
            </Link>

        </div>

    </>

    )
}
export default Signup;