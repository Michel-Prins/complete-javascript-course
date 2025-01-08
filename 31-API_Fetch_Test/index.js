// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//   //   .then((response) => console.log(response))
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`Could not fetch resource`);
//     }
//     return response.json();
//   })
//   // .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

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

// fetch(
//   // 'http://localhost:8088/https://dfhs0012.dtnfd.nl-016.lan.philips.com:8080/meta?X-Access-Id=00011475',
//   'https://dfhs0012.dtnfd.nl-016.lan.philips.com:8080/meta?X-Access-Id=00011475',
//   {
//     method: 'GET',
//     mode: 'no-cors',
//     // body: content,
//     credentials: 'include',
//     headers: {
//       // Authorization: `Basic ${btoa('drachten:Drachten@1')}`,
//       // Authorization: `Basic ${auth}`,
//       Accept: '*/*',
//       'Accept-Charset': 'utf-8',
//       'Accept-Encoding': 'gzip,deflate,sdch,br',
//       Connection: 'keep-alive',
//       'Content-Type': 'application/json',
//       // Host: 'dfhs0012.dtnfd.nl-016.lan.philips.com',
//       // Origin: 'http://127.0.0.1/',
//       // Referer: 'http://127.0.0.1/31-API_Fetch_Test/',
//     },
//   }
// ).then(response => console.log(response));

//==========================================================================================
//==========================================================================================

fetch(
  'https://dfhs0012.dtnfd.nl-016.lan.philips.com:8080/meta?X-Access-Id=00011475',
  {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      // Authorization: `Basic ${btoa('drachten:Drachten@1')}`,
      // Host: 'dfhs0012.dtnfd.nl-016.lan.philips.com',
      // 'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
      // 'Content-Type': 'text/plain',
      // Pragma: 'no-cache',
      Accept: 'application/json',
      // Accept: 'text/plain',
      // Accept: '*/*',
      // 'Accept-Charset': 'utf-8',
      // 'Accept-Encoding': 'gzip,deflate,br',
      // Connection: 'keep-alive',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS, FETCH',
    },
  }
)
  //   .then((response) => console.log(response))
  .then(response => {
    if (!response.ok) {
      throw new Error(`Could not fetch resource`);
    }
    return response.json();
  })
  // .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.error(error));

// const myHeaders = new Headers();
// // myHeaders.append('Authorization', `Basic ${btoa('drachten:Drachten@1')}`);
// myHeaders.append(
//   'Cookie',
//   'JSESSIONID=FD3A6C6226920469455B722C79CAE412; X-Plain-WSP-Session-Id=e981b5ea-7e04-4446-88a3-3bba26f40f50; X-WSP-Session-Id=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoiMS4wIiwiaWF0IjoxNzM0NjAzOTMzLCJ3c3Bfc2Vzc2lvbl9pZCI6ImU5ODFiNWVhLTdlMDQtNDQ0Ni04OGEzLTNiYmEyNmY0MGY1MCJ9.SA4tFUTz63q93KVlHGHzbzPhUy_3X18q4gqHN03DiV8; _66f8a=2dea68c412d2f0c8'
// );

// const requestOptions = {
//   credentials: 'include',
//   mode: 'no-cors',
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow',
//   // CORS_ALLOWED_ORIGINS: [
//   //   'https://dfhs0012.dtnfd.nl-016.lan.philips.com',
//   //   'http://localhost:8080',
//   //   'http://127.0.0.1:49920',
//   // ],
// };

// fetch(
//   'https://dfhs0012.dtnfd.nl-016.lan.philips.com:8080/meta?X-Access-Id=00011475',
//   requestOptions
// )
//   .then(response => console.log(response))
//   .then(result => console.log(result))
//   .catch(error => console.error(error));

//==========================================================================================
//==========================================================================================
// Krijg dit blijkbaar niet voor elkaar omdat ik json aanroep en iets van plain text terug krijg door de no-cors...
