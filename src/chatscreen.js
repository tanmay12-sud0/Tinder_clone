import React, { useState } from 'react'
import './chatscreen.css'
function chatscreen() {
    const [message, setMessage] = useState([
       {
           name:'eleesd',
           images: 'hsd',
           message:"Whats up yo"
       }, 
       {
           name:'eleesd',
           images: 'hsd',
           message:"Whats up yo"
       },
       {
           message: 'Hows it going!'
       }
    ]);
    return (
        <div className = 'chatscreen'>
            <h2>Chat screen</h2>
            <p>YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {message.map(message => (
                <div>
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    )
}

export default chatscreen
