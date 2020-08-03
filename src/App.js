import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frases';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background-color: #0F574E;
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  // state de frases
  const [ frase, guardarFrase ] = useState({})

  //Cargando
  const [ cargando, guardarCargando ] = useState(true);


  const consultarAPI = async () => {
    guardarCargando(true);
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);
    guardarCargando(false);
  }

  // Cargar una frase
  useEffect( () => {
    consultarAPI()
  }, []);

  return (
    <Contenedor>
      <Frase 
        frase={frase}
        cargando={cargando}
      />
      <Boton
        onClick= {consultarAPI}
      >
        Obtener Fraces
      </Boton>
    </Contenedor>
  );
}

export default App;