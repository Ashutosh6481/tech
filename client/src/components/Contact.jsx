import React, { useState } from 'react';

const Contact = () => {
    const [name,setName]=useState("");
    const [email,setemail]=useState("");
    const [message,setMessage]=useState("");
    const handleNameChange =(e)=>{
        setName(e.target.value);
        console.log(name);
    }
    const handleEmailChange =(e)=>{
        setemail(e.target.value);
        console.log(email);
    }
    const handleMessageChange =(e)=>{
        setMessage(e.target.value);
        console.log(message);
    }
    const handleClick=()=>{
        alert("Name: "+name+"\nEmail: "+email+"\nMessage: "+message)
    }
  return (
    <div className='contact'>
        <main>
            <div>
            <h1>Contact Us</h1>
           
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder="Abc" onChange={handleNameChange} />
                </div>
                
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder="Abc@xyz.com" onChange={handleEmailChange} />
                </div>
               
                <div>
                    <label>Message</label>
                    <input type='text' required placeholder='Tell us about your query...' onChange={handleMessageChange}/>
                </div>
                
                
                <button type='submit' onClick={handleClick}>Send</button>
            </form>
            </div>
        </main>
    </div>
  );
};

export default Contact; 