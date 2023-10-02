import React from 'react';
import './App.css';
import RouterComponent from './Router/Router';
import { Box } from '@mui/material';
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
