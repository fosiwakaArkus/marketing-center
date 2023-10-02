import React from 'react';
import './Router.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import AboutUsComponent from '../views/About-us/AboutUs';
import { Ruta } from '../interfaces/rutas.interface';
import HomePageComponent from '../views/HomePage/Home';

function RouterComponent() {
  const rutas: Array<Ruta> = [
    {
        key: 0,
        path: '/',
        element: <HomePageComponent />
    },
    {
        key: 1,
        path: '/about-us',
        element: <AboutUsComponent />
    }
  ]
  return (
    <Routes>
        {rutas.map((ruta: Ruta) => <Route {...ruta} /> )}
    </Routes>
  );
}

export default RouterComponent;
