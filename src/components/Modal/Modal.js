import React, { useState } from 'react';
import "./Modal.css";

const Modal = (props) => {
    // console.log("from modal" ,props.finalemail);
  return (
    <div className='modalbg'>
            <div className='modal-container'>
                   
                    <img src='images/icon-list.svg'></img>
                    <h1> Thanks for<br></br> subscribing </h1>
                    <p> A confirmation email has been sent to<br></br> {props.finalemail} . Please open it and click <br></br> the button inside to confirm your subscription </p>
                    <button>Dismiss message</button>

                

                   
            </div>
           
    </div>
  )
}

export default Modal