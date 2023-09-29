import React from 'react';
import './App.css';
import RouterComponent from './Router/Router';
import { AppBar, Box, Button, IconButton, InputBase, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Bar from './components/appBar/appBar';

function App() {
  return (
    <Box sx={{ flexGrow: 1 } }>
      <Bar />
      <div className="App">
        <RouterComponent />
      </div>
    </Box>
  );
}

export default App;
