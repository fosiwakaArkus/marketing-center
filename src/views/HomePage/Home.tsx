import React, { useEffect, useState } from "react";
import { Caracter } from '../../interfaces/rickandmorty.interface';
import axios from 'axios';
import './Home.css';
import Footer from "../../components/footer/footer";
import Cards from "../../components/cards/cards";
import Menu from "../../components/menu/menu";
import Options from "../../components/options/options";

const HomePageComponent = () => {
  const [caracters, setCaracters] = useState<Array<Caracter>>([])

  useEffect(() => getCaracters(), [])

  function getCaracters(): void {
    axios.get('https://rickandmortyapi.com/api/character')
      .then((response: any) => setCaracters(response.data.results))
      .catch((error) => console.error('ocurro un error: ', error))
  }

  return (
    <div className="App">
      <Menu />
      <Options />
      <Cards />
      <Footer />
    </div>
  )
}

export default HomePageComponent