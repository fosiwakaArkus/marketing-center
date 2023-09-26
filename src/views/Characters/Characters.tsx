import React, { useEffect, useState } from "react";
import './Characters.css';
import { Caracter } from '../../interfaces/rickandmorty.interface';
import axios from 'axios';
import CardComponent from '../../components/card/card';

  


const CharactersComponent = () => {
    const [caracters, setCaracters] = useState<Array<Caracter>>([])

  useEffect(() => getCaracters() , [])

  function getCaracters(): void {
    axios.get('https://rickandmortyapi.com/api/character')
    .then((response: any) => setCaracters(response.data.results) )
    .catch((error) => console.error('ocurro un error: ', error))
  }
  
    return (
        <div className="App">
      <div>
       <h2 className='title'> Rick and Morty</h2>
      </div>
      <ul className="box" > {
        caracters.map((caracter: Caracter) => (
          <li key={caracter.id}>
            <div className="box-size">
              <CardComponent {...caracter} />
            </div>
          </li>
        ))
      }
      </ul>
    </div>
    )
}

export default CharactersComponent