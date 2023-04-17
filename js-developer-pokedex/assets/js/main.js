const pokemonList = document.getElementById('pokemonList')
const pokemonDetail = document.getElementById('pokemonDetail')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

pokemonDetails: string = [];

function convertPokemonToLi(pokemon) {
    return `
    
        <li class="pokemon ${pokemon.type}" >
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <a  href="../../detail.html" onClick()="getPokemon1(pokemon.number)"> <img src="${pokemon.photo}"
                     alt="${pokemon.name}">   </a>
            </div>
        </li>
      
    `
}

function convertPokemonDetails(pokemon) {
    return `
    
        <li class="pokemon ${pokemon.type}" >
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
             
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
          

            </div>
        </li>
      
    `
}

   function getPokemon1(id){ 
     console.log("AQQUIIIIII", pokemons);
    pokeApi.getPokemon(id).then((pokemons = []) => {
       console.log("AQQUIIIIII", pokemons);
    })
}


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})