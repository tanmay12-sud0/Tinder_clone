import React from 'react'
import './Chat.css'
import Avatar from '@material-ui/core/Avatar';
function Chat(props) {
    return (
        <div className = 'Chat'>
            <Avatar alt="Remy Sharp" src={props.profilePic} className = 'chat__images' />
            <div className = 'chat__details'>
                <h2>{props.name}</h2>
                <p>{props.message}</p>
            </div>
            <p className = 'chat__timestamp'>{props.timestamp}</p>
        </div>
    )
}

export default Chat
