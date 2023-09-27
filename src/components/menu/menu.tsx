import React from 'react';
import '../../App.css';
import { Button } from '../button/button';
import './menu.css';

function Menu() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      {/* <img src='/images/home.jpeg' alt='home' /> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Menu;