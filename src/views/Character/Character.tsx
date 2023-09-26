import React, { useEffect, useState } from "react";
import './Character.css';
import { Caracter } from '../../interfaces/rickandmorty.interface';
import axios from 'axios';
import CardComponent from '../../components/card/card';
import { useParams } from "react-router-dom";

  


const CharacterComponent = () => {
    const [caracter, setCaracter] = useState<Caracter>({} as Caracter)
    let params = useParams();

  useEffect(() => {
    getCaracters()
  } , [])

  function getCaracters(): void {
    console.log('params: ', params)
    axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
    .then((response: any) => setCaracter({...response.data, expandedCard: true, width: '90%'}))
    .catch((error) => console.error('ocurro un error: ', error))
  }
  
    return (
      <div className="container">
        <div>
         <h2 className='title'> Rick and Morty</h2>
        </div>
        <div className="box-size; expanded-full">
          {caracter.id && <CardComponent {...caracter} />}
        </div>
      </div>
    )
}

export default CharacterComponent