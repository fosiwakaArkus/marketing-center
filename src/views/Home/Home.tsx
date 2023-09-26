import React, { useState, useEffect } from 'react';
import './Home.css';
import { Caracter } from '../../interfaces/rickandmorty.interface';
import axios from 'axios';
import CardComponent from '../../components/card/card';

function HomeComponent() {
  return ( <iframe className="container-iframe" src="https://rickandmortywormageddon.com/locations/" title="W3Schools Free Online Web Tutorials"></iframe>);
}

export default HomeComponent;
// cambiar a mayusculas el nombre de los componentes(solo la primer letra)