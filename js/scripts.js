/* Pokemon list and attributes */

let pokemonList = [
    { id: 1, name: 'Bulbasaur', hp: 45, height: 0.7, types: ['grass', 'poison']},
    { id: 2, name: 'Ivysaur', hp: 60, height: 1, types: ['grass', 'poison']},
    { id: 3, name: 'Venusaur', hp: 80, height: 2, types: ['grass', 'poison']},
    { id: 4, name: 'Charmander', hp: 39, height: 0.6, types: ['fire']},
    { id: 5, name: 'Charmeleon', hp: 58, height: 1.1, types: ['fire']},
    { id: 6, name: 'Charizard', hp: 78, height: 1.7, types: ['fire', 'flying']},
    { id: 7, name: 'Squirtle', hp: 44, height: 0.5, types: ['water']},
]

/* Loop to display pokemon and highlight sizes */

    for (let i = 0;
      i < pokemonList.length; i++) {
      if(pokemonList[i].height >= 2) {
          document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " m) - Woah, that is a big pokemon!" + "<br>")
      }
      else if (pokemonList[i].height >= 2 && pokemonList[i].height < 5){
          document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " m) - This is a medium pokemon." + "<br>")
      }
      else {
          document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " m) - This is a small pokemon." + "<br>")
      }
  }