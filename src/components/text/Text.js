import React, { useState } from 'react'
import "./Text.css";
import Modal from '../Modal/Modal';


const Text = () => {
    const [inValid, setInvalid] = useState(false);
    const [require, setRequire] = useState("Valid email required");
    const [showModal, setShowModal] = useState(false); 

    const dismissHandler = () => {
        setShowModal(false);
    }

    const [typedEmail, setTypedEmail] = useState('');
    const subBtnHandler = () => {
        const email = document.getElementById('input-field').value;
        if (email.includes('@')) {
            setTypedEmail(email);
            setInvalid(false);
            setShowModal(true);
        }
        else {
            setInvalid(true);
            setShowModal(false);
        }
    }

    return (
        <div className='align'>
            <h1>Stay updated!</h1>
            <div>
                <p>Join 60,000+ product managers recieving monthly updates on:</p>
                <div className='list'>
                    <img src='images/icon-list.svg'></img>
                    <p>Product discovery and building what matters</p>
                </div>
                <div className='list'>
                    <img src='images/icon-list.svg'></img>
                    <p>Measuring to ensure updates are a success</p>
                </div>
                <div className='list'>
                    <img src='images/icon-list.svg'></img>
                    <p>And much more!</p>
                </div>
                <div className='email'>
                    <p> Email address</p>
                    <p className='error'> {inValid && require}</p>
                </div>
                <div className="mail">
                    <input id='input-field' className='input' type='email' placeholder='email@company.com'></input>
                    <button className='subscribe' onClick={() => subBtnHandler()}>
                        Subscribe to monthly newsletter</button> </div>
            </div>
            <div className={`${showModal ? 'show-modal' : 'hide-modal'}`}>
                <Modal typedEmail={typedEmail}
                dismissHandler={dismissHandler}
                showModal={showModal}></Modal>
            </div>
        </div>
    )
}

export default Text