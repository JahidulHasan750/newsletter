import React, { useState } from 'react'
import "./Text.css";
import Modal from '../Modal/Modal';


const Text = () => {
    const [valid, setValid] = useState(false);
    const [require, setRequire] = useState("Valid email required");
    const [email,setEmail]=useState("");
    const[finalemail, setFianlemail]=useState("");
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
                    <input className='input' type='email' placeholder='email@company.com' onChange={(event)=>setEmail( event.target.value)}></input>
                    <button className='subscribe' onClick={()=>{
                        
                        if(!email.includes("@")){
                            setValid(true);
                            
                        }
                        else{
                            setValid(false);
                            setFianlemail(email);
                           
                        }
                    }}>Subscribe to monthly newsletter</button> </div>
            </div>


              <div className='modal'>
                <Modal fianlemail={finalemail}></Modal>
                
              </div>     

        </div>
    )
}

export default Text