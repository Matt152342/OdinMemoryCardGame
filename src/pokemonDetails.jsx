
async function getPokemonDetails(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ name }`);

        if (!response.ok) {
            throw new Error(`${ name } not found!`);
        }

        const pokemonData = await response.json();

        const pokemonDetails = {
            name: pokemonData.name,
            type: pokemonData.types[0].type.name,
            sprite: pokemonData.sprites.front_default,
        }

        return pokemonDetails;
    } catch (error) {
        console.log(error);
    }
}

export default getPokemonDetails;