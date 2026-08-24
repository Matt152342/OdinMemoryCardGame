import { useState, useEffect } from 'react';
import getPokemonDetails from '../pokemonDetails';
import '../styles/gameCard.css';

function GameCard ({name, dataKey, onClick}) {
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            try {
                const data = await getPokemonDetails(name);
                setPokemon(data);
            } catch (error) {
                throw new Error(`${error}`);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [name]);

    if (isLoading) {
        return (
            <h1>TODO</h1>
        )
    }

    if (!pokemon) {
        return <div className="card-error">Failed to load</div>;
    }

    return (
        <div className="card" data-key={dataKey} draggable={false} onDragStart={e => e.preventDefault()} onClick={onClick}>
            <img src={pokemon.sprite} alt={`Picture of ${name}`} className="pokemonImage" />
            <p className="pokemonName">{pokemon.name}</p>
        </div>
    )
}

export default GameCard;