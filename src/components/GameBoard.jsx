import GameCard from "./GameCard";
import '../styles/gameBoard.css';

function GameBoard({pokemonList, cardClick}) {

    return (
        <div className="gameBoard">
            {pokemonList.map((name) => {
                return <GameCard
                    name={name}
                    key={name}
                    onClick={() => cardClick(name)}
                />
            })}
        </div>
    )
}

export default GameBoard;