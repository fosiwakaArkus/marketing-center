import React from 'react';
import './Router.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import HomeComponent from '../views/Home/Home';
import AboutUsComponent from '../views/About-us/AboutUs';
import { Ruta } from '../interfaces/rutas.interface';
import CharactersComponent from '../views/Characters/Characters';
import CharacterComponent from '../views/Character/Character';

function RouterComponent() {
  const rutas: Array<Ruta> = [
    {
        key: 0,
        path: '/',
        element: <HomeComponent />
    },
    {
        key: 1,
        path: '/about-us',
        element: <AboutUsComponent />
    },
    {
        key: 2,
        path: '/characters',
        element: <CharactersComponent />
    },
    {
      key: 3,
      path: '/character/:id/:type?',
      element: <CharacterComponent />
    }
  ]
  return (
    <Routes>
        {rutas.map((ruta: Ruta) => <Route {...ruta} /> )}
    </Routes>
  );
}

export default RouterComponent;
