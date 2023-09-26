import React, { useState } from 'react';
import './App.css';
import RouterComponent from './Router/Router';
import { AppBar, Box, Button, IconButton, InputBase, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [searchValue, setSearchValue] = useState<any>('');
  const navigate = useNavigate();

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const redirect = (path: string) => {
    console.log(path)
    navigate(path)
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      console.log('searchValue: ', searchValue)
      navigate(`/character/${searchValue}`)
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
       <ThemeProvider theme={darkTheme}>
       <AppBar position="static" >
        <Toolbar>
          <Button onClick={() => redirect('/')} sx={{ flexGrow: 4, display: { xs: 'none', sm: 'block' } }} color="inherit">Home</Button>
          <Button onClick={() => redirect('/characters')} sx={{ flexGrow: 4, display: { xs: 'none', sm: 'block' } }} color="inherit">Characters</Button>
          <Button onClick={() => redirect('/about-us')} sx={{ flexGrow: 4, display: { xs: 'none', sm: 'block' } }} color="inherit">About us</Button>
         
          {/* <Search className='input-size' onKeyDown={(event: any) => handleKeyDown(event)}  >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={searchValue}
              onChange={(value: any) => setSearchValue(value.target.value)}
              placeholder="Search character…"
              inputProps={{ 'aria-label': 'search',  className: 'input-size-text', maxLength:"60" }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
       </ThemeProvider>
      
      <div className="App">
      <RouterComponent />
    </div>
    </Box>
   
  );
}

export default App;
