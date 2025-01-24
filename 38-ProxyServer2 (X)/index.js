// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const url = require("url");
// const needle = require("needle");

// const app = new express();
// const PORT = process.env.PORT || 4000;

// //Enable CORS
// app.use(cors());

// // Enviornment variable
// const API_URL = process.env.API_URL;
// const API_KEY_VARIABLE = process.env.API_KEY_VARIABLE;
// const API_KEY_VALUE = process.env.API_KEY_VALUE;

// //create the route
// app.get("/api", async (req, res) => {
//   try {
//     const params = new URLSearchParams({
//       [API_KEY_VARIABLE]: API_KEY_VALUE,
//       ...url.parse(req.url, true).query, //Query parameters passed to the proxy e.g city here
//     });

//     //Call the actual api here using needle
//     const apiResponse = await needle("get", `${API_URL}?${params}`);
//     const data = apiResponse.body;
//     res.status(200).json(data);
//   } catch (ex) {
//     res.status(500).json({ ex });
//   }
// });

// app.listen(PORT, () => console.log(`Proxy server listening at port ${PORT}`));

// The code above is very simple and have a single route /api , in this we are parsing the query parameters passed from client application and concatinating them with the secret api key from environment variables.

// After this we have created the full URL of the actual api using API_URL and params and made a get request using needle, which returns the actual response from the remote api, which we send to the client again.

// Check the reposne using following http request from any http client or browser of your choice.

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const url = require("url");
const needle = require("needle");

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS
app.use(cors());

// Environment variables
const API_URL = process.env.API_URL;
const API_KEY_VARIABLE = process.env.API_KEY_VARIABLE;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

// Create the route
app.get("/api", async (req, res) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_VARIABLE]: API_KEY_VALUE,
      ...url.parse(req.url, true).query, // Query parameters passed to the proxy e.g. city here
    });

    const options = {
      timeout: 10000,
      rejectUnauthorized: false, // Onveilig, alleen voor testdoeleinden
    };

    // Call the actual API using needle with custom options
    const apiResponse = await needle(
      "get",
      `${API_URL}?q=sneek${params}`,
      options
    );

    // Log the response headers and status code
    console.log("Response headers: ", apiResponse.headers);
    console.log("Response status code: ", apiResponse.statusCode);

    const data = apiResponse.body;

    // Log the response body for debugging
    console.log("API response body: ", data);

    res.status(200).json(data);
  } catch (ex) {
    console.error("Error fetching API: ", ex);
    res.status(500).json({ error: ex.message });
  }
});

app.get("/test", (req, res) => {
  res.status(200).json({ message: "Server werkt correct!" });
});
app.get("/dev", (req, res) => {
  res.status(200).json({ message: "Dev server, geen hot restart dus!" });
});

app.listen(PORT, () => console.log(`Proxy server listening at port ${PORT}`));
