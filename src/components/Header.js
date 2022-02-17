import React, { useState } from 'react'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import IconButton from '@mui/material/IconButton';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import axios from './constants/constants';

import logo from "../assets/images/logo.png"
import "./styles/header.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [ name, setName ] = useState(null);
  const [ url, setUrl ] = useState(null);

  const nameChange = (e) => {
      setName(e.target.value);
      console.log(name);
  }
  const urlChange = (e) => {
    setUrl(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (name !== null && url !== null) {

      axios.post("/tinder/cards",{
        "name" : name,
        "imageUrl" : url
      });
      window.location.reload();
    }
  }
  return (
    <div className="header">
      <IconButton>
        <AccountCircleOutlinedIcon fontSize="large" />
      </IconButton>
      <img
        className='header_logo'
        src={logo}
      />
      <IconButton onClick={handleOpen}>
        <MapsUgcRoundedIcon fontSize="large" />
      </IconButton>
      <div style={{ position: "absolute" }} >
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={onSubmit}>
            <Grid container>
              <Grid item xs={12}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Enter Name
                </Typography>
                <TextField id="standard-basic" label="Enter Name" variant="standard" onChange={nameChange} />
              </Grid>
              <Grid item xs={12} mt={4}>

                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Enter URL
                </Typography>
                <TextField id="standard-basic" label="Enter URL" variant="standard" onChange={urlChange} />
              </Grid>
            </Grid>
            <Button
            type="submit"
            variant="outlined"
            style={{ marginTop : "20px" }}
            >
              Update Data
            </Button>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  )
}

export default Header