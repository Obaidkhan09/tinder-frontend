import React from 'react'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import IconButton from '@mui/material/IconButton';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';

import logo from "../assets/logo.png"
import "../styles/header.css"

function Header() {
  return (
    <div className="header">
        <IconButton>
            <AccountCircleOutlinedIcon fontSize="large" />
        </IconButton>
        <img
            className='header_logo'
            src={logo}
        />
        <IconButton>
            <MapsUgcRoundedIcon fontSize="large" />
        </IconButton>
    </div>
  )
}

export default Header