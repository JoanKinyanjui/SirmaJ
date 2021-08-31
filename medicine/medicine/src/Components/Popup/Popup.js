import React from 'react';
import './Popup.css';

function Popup(props){
    return(props.trigger) ? (
        <div className='Popup'>
            <div className='inner'>
            <button className='inner-btn' onClick={()=> props.setTrigger(false)}>close</button>
            {props.children}
            </div>
        </div>
    ): '';
}
export default Popup;