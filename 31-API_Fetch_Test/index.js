fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  //   .then((response) => console.log(response))
  .then(response => {
    if (!response.ok) {
      throw new Error(`Could not fetch resource`);
    }
    return response.json();
  })
  // .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Fetch in een try catch block
async function fetchData() {
  try {
    const pokemonName = document
      .getElementById('pokemonName')
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new error(`Could not fetch resource`);
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById('pokemonSprite');

    imgElement.src = pokemonSprite;
    imgElement.style.display = 'block';

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

//==========================================================================================
//==========================================================================================

// Dit zou denk ik in een express iets moeten draaien...
// const cors = require('cors');
// const corsOptions = {
//   origin: '*',
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions)); // Use this after the variable declaration

let username = 'drachten';
let password = 'Drachten@1!';
let auth = btoa(`${username}:${password}`);

// // fetchData();
// fetch(
//   'https://cors-anywhere.herokuapp.com/?https://dfhs0012.dtnfd.nl-016.lan.philips.com:8080/meta?X-Access-Id=00011475',
//   {
//     headers: { Authorization: `Basic ${auth}` },
//   }
// ) //   .then((response) => console.log(response))
//   .then(response => {
//     if (!response.ok) {
//       throw new error(`Could not fetch resource`);
//     }
//     return response.json();
//   })
//   .then(response => response.json())
//   .then(json => console.log(JSON.stringify(json)))
//   .then(data => console.log(data));
// // .catch(error => console.error(error));

// // {
// //   headers: { Authorization: 'Bearer {token}' },
// // }

fetch(
  'http://localhost:3000/https://dfhs0012.dtnfd.nl-016.lan.philips.com:8080/meta?X-Access-Id=00011475',
  {
    headers: { Authorization: `Basic ${auth}` },
  }
).then(response => console.log(response));
