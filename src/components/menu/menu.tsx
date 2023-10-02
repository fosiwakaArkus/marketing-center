import React from 'react';
import '../../App.css';
/* import { Button } from '../button/button'; */
import './menu.css';
import { Input, Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';

function Menu() {
  return (
    <div className='main-container'>
      <h2>WELCOME TO THE</h2>
      <img src='images/logo_white.png' className='logoMain' />
      <div className='horizontal'>
        <Input color='primary' disableUnderline margin='dense' className='search' />
        <img src='images/searchbtn.png' className='searchButton' />
      </div>
      <h2 className='sub'>Customized marketing to help grow your business.</h2>
    </div>
  );
}

export default Menu;