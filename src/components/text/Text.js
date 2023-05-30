import React, { useState } from 'react'
import "./Text.css";
import Modal from '../Modal/Modal';


const Text = () => {
    const [valid, setValid] = useState(false);
    const [require, setRequire] = useState("Valid email required");
    const [showModal,setShowModal]=useState(false);
    const [email,setEmail]=useState("");
    const modalhandle=()=>{
        setShowModal(false);
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
                    <p className='error'> {valid && require}</p>
                </div>
                <div className="mail">
                    <input className='input' type='email' placeholder='email@company.com' id='getemail'></input>
                    <button className='subscribe' onClick={()=>{
                        const email=document.getElementById('getemail').value;
                        if(!email.includes("@")){
                            setValid(true);
                            setShowModal(false);
                        }
                        else{
                            setValid(false);
                            setEmail(email);
                            setShowModal(true);
                            
                           
                        }
                    }}>Subscribe to monthly newsletter</button> </div>
            </div>


              <div className={`${showModal? "show-modal":"hide-modal"}`}>
                <Modal email={email}
                modalhandle={modalhandle}></Modal>
                
              </div>     

        </div>
    )
}

export default Text