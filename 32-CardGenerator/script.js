'use strict';

//Object = {}, array = []...
const typeColor = {
  bug: '#26de81',
  dragon: '#ffeaa7',
  electric: '#fed330',
  fairy: '#FF0069',
  fighting: '#30336b',
  fire: '#f0932b',
  flying: '#81ecec',
  grass: '#00b894',
  ground: '#EFB549',
  ghost: '#a55eea',
  ice: '#74b9ff',
  normal: '#95afc0',
  poison: '#6c5ce7',
  psychic: '#a29bfe',
  rock: '#2d3436',
  water: '#0190FF',
};

const url = 'https://pokeapi.co/api/v2/pokemon/';
const card = document.getElementById('card');
const btn = document.getElementById('btn');

let capitalizeName = nameToUpper => {
  return nameToUpper[0].toUpperCase() + nameToUpper.slice(1);
};

// Arrow function
let getPokeData = () => {
  //Generate a random number between 1 and 150
  let id = Math.floor(Math.random() * 150) + 1;
  //Combine the pokemon id with the API URL
  const finalUrl = url + id;
  //Fetch generated URL
  fetch(finalUrl)
    .then(response => response.json())
    // .then(data => generaCard(data));
    .then(data => {
      // Met data een andere
      generateCard(data);
    });
};

// Dit is hetzelfde zoals ik het zou maken?
// let getPokeData = function () {
//     let id = Math.floor(Math.random() * 150) + 1;
//     console.log(id);
// };

let generateCard = data => {
  //Get necessary data and assign it to variables
  //console.log(data);

  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default;
  const pokeName = data.name;
  const statAttack = data.stats[1].base_stat;
  const statDefence = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  //Set themeColor based on pokemon type (origineel met maar 1 kleur)
  // const themeColor = typeColor[data.types[0].type.name];

  //Helaas is dit pas vanaf ES06!
  const themeName = data.types.map(value => value.type.name);
  const themeColor = themeName.map(color => typeColor[color]);

  card.innerHTML = `
  <p class="hp">
          <span>HP</span>
          ${hp}
        </p>
        <img src=${imgSrc} />
        <h2 class="poke-name">${
          //   pokeName[0].toUpperCase() + pokeName.slice(1)
          capitalizeName(pokeName)
        }</h2>
        <div class="types">
        </div>
        <div class="stats">
          <div>
            <h3>${statAttack}</h3>
            <p>Attack</p>
          </div>
          <div>
            <h3>${statDefence}</h3>
            <p>Defense</p>
          </div>
          <div>
            <h3>${statSpeed}</h3>
            <p>Speed</p>
          </div>
        </div>
  `;
  //Data.types is een array die niet altijd even langs is. Dus wel uitzoeken 1 of meerdere types
  appendTypes(data.types);
  styleCard(themeColor);
};

let styleCard = color => {
  // Achtergrond circel aanpassen
  card.style.background = `radial-gradient(
    circle at 50% 0%,
    ${color[0]} 35%,
    #ffffff 35%)`;
  //achtergrond van de type labels aanpassen -> Dit kan weer niet met een MAP!!!
  card.querySelectorAll('.types span').forEach((typeColor, i) => {
    typeColor.style.backgroundColor = color[i];
  });
};

let appendTypes = types => {
  types.map(item => {
    // Hiermee creeer je een nieuw element zoals <span></span>
    let span = document.createElement('SPAN');
    //Met textcontent plaats je er een waarde in! <span>TYPE</span>
    span.textContent = capitalizeName(item.type.name);
    // Selecteren class (door de .) types, en maken een child aan met var span
    document.querySelector('.types').appendChild(span);
  });
};

// Dit triggert de functie getPokeData zodra op de knop btn wordt gedrukt
btn.addEventListener('click', getPokeData);
// Dit triggert de functie getPokeData zodra de pagina geladen wordt
window.addEventListener('load', getPokeData);
