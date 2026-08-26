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
  const [clickedCards, setClickedCards] = useState([]);

  function shufflePokemon() {
    const copy = pokemon;

    for (let i = pokemon.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
  }

  function handleCardClick(cardName) {
    if (clickedCards.includes(cardName) || count >= 12) {
      setHighScore(count);
      setCount(0);
      setClickedCards([]);
      shufflePokemon();
      return;
    }

    setCount(count + 1);
    setClickedCards([...clickedCards, cardName]);
    shufflePokemon();
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
