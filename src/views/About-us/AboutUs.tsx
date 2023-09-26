import React, { useState, useEffect } from 'react';
import './AboutUs.css';

function AboutUsComponent() {


  return (
    <div className='container'>
      <div className="about-me">
        <legend><span> rickandmorthy</span></legend>
        <center><h2>About Us</h2></center>
        
        <div>
          <p>
            Hello Friends, welcome to our website <a href="rickandmorthy.com"><strong>rickandmorthy</strong></a>, founded on 19 julio 2023 by <strong>Francisco Javier Camacho Guerra</strong>.
          </p>
        </div>
        <div>
          <p>
            <b>rickandmorthy</b> is a free professional rickandmorthy.com platform where we provide Engineer computer etc. with a focus on dependability and daily. It is one of the basic needs of our everyday life. However, there are thousands of websites for Engineer computer etc. but here you will find a useful and comprehensive content. We hope you enjoy our Engineer computer as much as we enjoy offering them to you.
          </p>
        </div>
        
        <p>
          If you have any <a href="https://www.3schools.in" target="_blank">question</a> or query regarding our website, please contact us by visiting our <a href="rickandmorthy.com" target="_blank">Contact Us</a> page or mailling us at <a href="mailto:franciscocamachoguerra@gmail.com" target="_blank">franciscocamachoguerra@gmail.com</a> .
        </p>
        
      </div>
    </div>
  );
}

export default AboutUsComponent;
// cambiar a mayusculas el nombre de los componentes(solo la primer letra)