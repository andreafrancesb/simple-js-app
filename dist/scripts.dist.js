let pokemonRepository=function(){let e=[];function t(t){"object"==typeof t&&"name"in t&&"detailsUrl"in t?e.push(t):console.log("pokemon is not correct")}function n(){return e}function o(e){return fetch(e.detailsUrl).then(function(e){return e.json()}).then(function(t){e.id=t.id,e.imageUrl=t.sprites.other.dream_world.front_default,e.height=t.height,e.types=t.types}).catch(function(e){console.error(e)})}function i(e){pokemonRepository.loadDetails(e).then(function(){document.querySelector(".modal-title").innerText=e.name;let t=document.querySelector(".image-container"),n=document.createElement("img");n.src=e.imageUrl,n.classList.add("pokemon-image"),t.innerHTML="",t.append(n);document.querySelector(".height").innerText="Height: "+e.height;let o=document.querySelector(".modal");o.classList.add("modal-is-visible"),o.classList.remove("modal");let i=document.querySelector("#button-container"),l=document.createElement("button");l.classList.add("btn"),l.classList.add("modal-close"),l.innerText="x",i.innerHTML="",i.append(l),l.addEventListener("click",function(){let e;e=document.querySelector("#modal-container"),e.classList.remove("modal-is-visible"),e.classList.add("modal"),modalCloseButton.innerHtml=""})})}return{add:t,getAll:n,addListItem:function e(t){let n=document.querySelector(".pokemon-list"),l=document.createElement("li");l.classList.add("list-group-item");let a=document.createElement("button");a.innerText=t.name,a.classList.add("pokemon-button"),a.classList.add("btn"),a.setAttribute("data-toggle","modal"),a.setAttribute("data-target","#pokemonModal"),l.appendChild(a),n.appendChild(l),a.addEventListener("click",function(){(function e(t){o(t).then(function(){i(t)})})(t)})},loadDetails:o,loadList:function e(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){t({name:e.name,detailsUrl:e.url})})}).catch(function(e){console.error(e)})},showModal:i}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});
