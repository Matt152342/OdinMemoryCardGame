import { useState } from 'react';
import GameBoard from './components/GameBoard';
import './App.css';

const pokemon = [
    "gardevoir",
    "charizard",
    "mewtwo",
    "gengar",
    "greninja",
    "snorlax",
]

function App() {

  return (
    <>
      <GameBoard
        pokemonList={pokemon}
      />
    </>
  )
}

export default App
