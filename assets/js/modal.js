function openModal() {
  modal.style.display = 'block'
}

function convertPokemonDetailToHtml(pokemon) {
  return `
		<div class="card-modal ${pokemon.type}">
			<div class="barTitle">
					<span class="number-card">#${pokemon.number}</span>
					<span class="name-pokemon">${pokemon.name}</span>
					<button id="btnCloserModal" onclick="closerModal()"></button>
			</div>

			<img src="${pokemon.photo}" class="pokePhoto">
			<div class="modalPhoto">
				<img class="photoMini" title="Front Normal" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
          pokemon.number
        }.gif">
				<img class="photoMini" title="Back Normal" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${
          pokemon.number
        }.gif">
				<img class="photoMini" title="Front Shiny" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${
          pokemon.number
        }.gif">
				<img class="photoMini" title="Back Shiny" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/${
          pokemon.number
        }.gif">
				
			</div>

			<div class="detail-card">
					<ol class="types"><p>Type</p>
						${pokemon.types
              .map(type => `<li class="liDetail ${type}">${type}</li>`)
              .join('')}
					</ol>
					<ol class="abilities"><p>Abilities</p>
						${pokemon.abilities
              .map(ability => `<li class="liDetail ability">${ability}</li>`)
              .join('')}
					</ol>
			</div>
		</div>
	`
}

function closerModal() {
  modal.style.display = 'none'
}

let box = document.getElementById('box')

function openDetails(pokemonName) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  fetch(url)
    .then(response => response.json())
    .then(convertPokeApiDetailToPokemon)

    .then(pokemon => {
      box.innerHTML = convertPokemonDetailToHtml(pokemon)
      openModal()
    })
}

let modal = document.getElementById('modal')
