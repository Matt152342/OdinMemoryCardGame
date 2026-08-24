import { useState } from 'react';
import GameBoard from './components/GameBoard';
import './App.css';

const pokemon = [
    "Mewtwo",
    "Psyduck",
    "Snorlax",
    "Sprigatito",
    "Heracross",
    "Chandelure",
    "Tyranitar",
    "Charizard",
    "Porygon",
    "Squirtle",
    "Jolteon",
    "Gengar",
]

function App() {
  const [count, setCount] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleCardClick (e) {
    setCount(count + 1)

    if (count === 12) {
      setHighScore(count)
      setCount(0);
    }

    return;
  }

  return (
    <main>
      <h2>Count: {count}</h2>
      <h2>HighScore: {highScore}</h2>
        
      <GameBoard
        pokemonList={pokemon}
        cardClick={handleCardClick}
      />
    </main>
  )
}

export default App
