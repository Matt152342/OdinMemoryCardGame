import { useEffect } from "react";  
import GameCard from "./GameCard";

const pokemon = [
    "pikachu",
    "charizard",
    "mewtwo",
    "gengar",
    "greninja",
    "snorlax",
]

function GameBoard() {

    return (
        <div>
            {pokemon.map((name) => {
                return <GameCard
                    name={name}
                    key={name}
                />
            })}
        </div>
    )
}

export default GameBoard;