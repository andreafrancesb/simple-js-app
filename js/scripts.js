let pokemonRepository = (function () {
  let pokemonArray = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon){ 
    if (typeof pokemon === 'object' &&
       'name' in pokemon &&
       'detailsUrl' in pokemon) {
      pokemonArray.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }

function getAll() {
  return pokemonArray;
}

function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.addEventListener('click', () => showDetails(pokemon));
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
}

function loadList() {
  return fetch(apiUrl)
  .then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url)
  .then(function(response){
    return response.json();
  }).then(function(details){
    item.id = details.id;
    item.imageUrl = details.sprites.other.dream_world.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function(e){
    console.error(e);
  });
}

function showDetails(pokemon) {
  loadDetails(pokemon).then(function(){
console.log (pokemon.name)
});
};

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadDetails: loadDetails,
  loadList: loadList,
};
})();

pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon)
  });
});