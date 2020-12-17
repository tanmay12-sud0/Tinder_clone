import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function Header ({backbutton}){
    return (
        <div className = 'Header'>
        {
            backbutton ? (
                <Link to = '/'>
                <IconButton>
            <ArrowBackIosIcon className='Header_icons' fontSize='large' />
            </IconButton>
                </Link>
            ) : (
                <IconButton>
            <PersonIcon className='Header_icons' fontSize='large' />
            </IconButton>
            )
        }
            
            <img 
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
            alt='tinder-logo' />
            <Link to='/chats'>
            <IconButton>
            <ForumIcon className='Header_icons' fontSize='large'className='Header_icons'  />
            </IconButton>
            </Link>
        </div>
    )
}

export default Header;