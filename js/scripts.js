let pokemonRepository = (function () {
   
   let pokemonList = [
        { id: 1, name: 'Bulbasaur', hp: 45, height: 0.7, types: ['grass', 'poison']},
        { id: 2, name: 'Ivysaur', hp: 60, height: 1, types: ['grass', 'poison']},
        { id: 3, name: 'Venusaur', hp: 80, height: 2, types: ['grass', 'poison']},
        { id: 4, name: 'Charmander', hp: 39, height: 0.6, types: ['fire']},
        { id: 5, name: 'Charmeleon', hp: 58, height: 1.1, types: ['fire']},
        { id: 6, name: 'Charizard', hp: 78, height: 1.7, types: ['fire', 'flying']},
        { id: 7, name: 'Squirtle', hp: 44, height: 0.5, types: ['water']},
];

function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "name" in pokemon &&
    "height" in pokemon &&
    "types" in pokemon
  ) {
    pokemonList.push(pokemon);
  } else {
    console.log("pokemon is not correct");
  }
}

function getAll() {
  return pokemonList;
}

function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.addEventListener('click', showDetails(pokemon));
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
}

function showDetails(pokemon) {
console.log (pokemon.name)
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem
};
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
pokemonRepository.addListItem(pokemon);
});