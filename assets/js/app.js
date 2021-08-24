//etiqueta seleccionada
const othersPokemons = document.querySelector(".footer");

//promesa obtenida de la peticion fetch
const showPokemon = async (name) => {
    const pokemons = await getPokemons();
    const pokemon = pokemons.find((pokemon) => pokemon.name === name);

    document.querySelector(".no").innerHTML = pokemon.stats.no;
    document.querySelector(".level").innerHTML = pokemon.stats.level;
    document.querySelector(".type").innerHTML = pokemon.stats.type;
    document.querySelector(".hability").innerHTML = pokemon.stats.hability;
    document.querySelector(".height").innerHTML = pokemon.stats.height;
    document.querySelector(".weight").innerHTML = pokemon.stats.weight;
    document.querySelector(".pokemon__icon").src = `./assets/img/${pokemon.stats.icon}.svg`;
    document.querySelector(".pokemon__image").src = pokemon.stats.image;
    document.querySelector(".pokemon__name").innerHTML = pokemon.name;
};

// peticiones fetch del json
const getPokemons = async () => {
    const res = await fetch("pokedex.json");
    const pokemons = await res.json();
    return pokemons;
};

//evento
const changePokemon = (e) => {
    if (event.target.classList.contains("footer__image")) {
        const pokemonName = e.target.dataset.pokemon;
        showPokemon(pokemonName);
    }
};

//accion del boton en el footer
othersPokemons.addEventListener("click", changePokemon);