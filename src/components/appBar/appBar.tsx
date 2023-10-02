
import { AppBar, Box, Button, IconButton, InputBase, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
import React from 'react';
import './appBar.css';

function Bar() {

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#1b1e2a',
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <IconButton edge="start" color="default" aria-label="menu" sx={{ mr: 2 }}>
              <img src='/images/logo_white.png' className='logo' onClick={() => console.log("aaa")}></img>
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button color="inherit" variant="outlined">Sign In</Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}

export default Bar;