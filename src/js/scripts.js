//IIFE STARTS
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

//Creates list items for each pokemon and turns them into buttons
  function addListItem(pokemon){ 
    let pokemonList = document.querySelector('.pokemon-list');
    let pokemonItem = document.createElement('li');
    pokemonItem.classList.add('list-group-item');

    let pokemonButton = document.createElement('button');
    pokemonButton.innerText = pokemon.name;
    pokemonButton.classList.add('pokemon-button');
    pokemonButton.classList.add('btn');
    pokemonButton.setAttribute('data-toggle', 'modal');
    pokemonButton.setAttribute('data-target', '#pokemonModal');

    pokemonItem.appendChild(pokemonButton);
    pokemonList.appendChild(pokemonItem);

//Logs pokémon details in the console when their button is clicked
    pokemonButton.addEventListener('click', function() {
      showDetails(pokemon);
    });
  };


//Fetches pokémon list from API and adds pokémons as objects
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

//Gets data from detailsURL and returns specific pokémon details
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

  //Logs pokémon details in the modal
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function(){
      showModal(pokemon);
    });
  }

//Displays modal
    function showModal(item) {
    pokemonRepository.loadDetails(item).then(function () {
      let modalTitle = document.querySelector(".modal-title");

      modalTitle.innerText = item.name;

      let imageContainer = document.querySelector(".image-container");

      let pokemonImage = document.createElement("img");

      pokemonImage.src = item.imageUrl;

      pokemonImage.classList.add("pokemon-image");

      imageContainer.innerHTML = "";

      imageContainer.append(pokemonImage);

      let pokemonHeight = document.querySelector(".height");

      pokemonHeight.innerText = "Height: " + item.height;

      let modal = document.querySelector(".modal");

      modal.classList.add("modal-is-visible");

      modal.classList.remove("modal");

      let buttonContainer = document.querySelector("#button-container");

      let modalCloseButton = document.createElement("button");

      modalCloseButton.classList.add("btn");

      modalCloseButton.classList.add("modal-close");
      modalCloseButton.innerText = "x";
      buttonContainer.innerHTML = "";

      buttonContainer.append(modalCloseButton);

      modalCloseButton.addEventListener("click", function () {
        closeModal();
      });
    });

    function closeModal() {
      let modalContainer = document.querySelector("#modal-container");
      modalContainer.classList.remove("modal-is-visible");
      modalContainer.classList.add("modal");
      modalCloseButton.innerHtml = "";
    }
  }

//Modal ends

//Makes functions accessible outside IIFE
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadDetails: loadDetails,
    loadList: loadList,
    showModal: showModal,
  };
})(); //IIFE ENDS

//Displays pokemon list by loading list, then calling getAll & forEach functions and returning created items

pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon)
  });
});