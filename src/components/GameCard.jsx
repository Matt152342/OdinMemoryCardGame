import { useState, useEffect } from 'react';
import getPokemonDetails from '../pokemonDetails';

function GameCard ({name}) {
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            try {
                const response = await getPokemonDetails(name);
                setPokemon(response.json());
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
        <div className="card">
            <img src={pokemon.sprite} alt={`Picture of ${name}`} className="pokemonImage" />
            <p className="pokemonName">{pokemon.name}</p>
        </div>
    )
}

export default GameCard;