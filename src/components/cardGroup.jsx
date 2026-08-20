
function CardGroup ({name, sprite}) {

    return (
        <div className="card">
            <img src={ sprite } alt="" className="pokemonSprite" />
            <p className="pokemonName">{ name }</p>
        </div>
    )
}

export default CardGroup;