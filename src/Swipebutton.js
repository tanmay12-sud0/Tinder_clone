import React from 'react'
import './Swipebutton.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function Swipebutton() {
    return (
        <div className = 'Swipebuttons'>
        <IconButton style = {{
            color: 'black',
            boxShadow: '0px 10px 53px 0px rgba(0,0,0,0.3)'
        }}>
            <ReplayIcon fontSize='large' />
            </IconButton>
            <IconButton style = {{
            color: 'orange',
            boxShadow: '0px 10px 53px 0px rgba(0,0,0,0.3)'
        }}>
            <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton style = {{
            color: 'blue',
            boxShadow: '0px 10px 53px 0px rgba(0,0,0,0.3)'
        }}>
            <StarRateIcon fontSize='large' />
            </IconButton>
            <IconButton style = {{
            color: 'purple',
            boxShadow: '0px 10px 53px 0px rgba(0,0,0,0.3)'
        }}>
            <FavoriteIcon fontSize='large' />
            </IconButton>
            <IconButton style = {{
            color: 'yellow',
            boxShadow: '0px 10px 53px 0px rgba(0,0,0,0.3)'
        }}>
            <FlashOnIcon fontSize='large' />
            </IconButton>
        </div>
    )
}

export default Swipebutton
