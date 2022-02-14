import React from 'react'
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';

import './styles/swipeButtons.css'

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton>
                <ReplayIcon className='replayButton' fontSize='large' />
            </IconButton>
            <IconButton>
                <CloseIcon className='closeButton' fontSize='large' />
            </IconButton>
            <IconButton>
                <StarOutlineOutlinedIcon className='starButton' fontSize='large' />
            </IconButton>
            <IconButton>
                <FavoriteBorderOutlinedIcon className='heartButton' fontSize='large' />
            </IconButton>
            <IconButton>
                <FlashOnOutlinedIcon className='flashButton' fontSize='large' />
            </IconButton>
        </div>
    )
}

export default SwipeButtons