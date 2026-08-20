
function GameCard ({name, sprit}) {

    return (
        <div className="card">
            <img src={sprite} alt={`Picture of ${name}`} className="pokemonImage" />
            <p className="pokemonName">{name}</p>
        </div>
    )
}

export default GameCard;