import { useEffect } from "react";  
import GameCard from "./GameCard";

function GameBoard({pokemonList}) {

    return (
        <div>
            {pokemonList.map((name) => {
                return <GameCard
                    name={name}
                    key={name}
                />
            })}
        </div>
    )
}

export default GameBoard;