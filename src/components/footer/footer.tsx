import React from 'react';
import './footer.css';
import { Button } from '../button/button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <img className='footer-image-logo' src='/images/logo.png'></img>
          </div>
          <div className='footer-link-items'>
            <p className='footerTitle'>COMPANY</p>
            <Link to='/sign-up'>Logos & Brand Guidelines</Link>
            <Link to='/'>eXp Marketing Center Workplace Group</Link>
            <Link to='/'>Build A Sign</Link>
            <Link to='/'>eXp Solutions</Link>
            <Link to='/'>Walled Garden Help Center </Link>
          </div>
          <div className='footer-link-items'>
            <p className='footerTitle'>FEATURES</p>
            <Link to='/'>Single Property Sites</Link>
            <Link to='/'>MLS Integration</Link>
            <Link to='/'>Address Mapping Tool</Link>
            <Link to='/'>Automated Postcard Campaigns</Link>
            <Link to='/'>Video Creator Tool </Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <p className='footerTitle'>SUPPORT</p>
            <Link to='/'>Print Pricing</Link>
            <Link to='/'>Helpful Videos</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Privacy Policy </Link>
          </div>

        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>eXp Marketing Center © 2023 All Rights Reserved</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;