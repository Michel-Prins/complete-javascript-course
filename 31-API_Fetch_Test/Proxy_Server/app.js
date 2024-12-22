// const express = require('express');
// const app = express();
// const port = 3000;

// app.get(`/`, (req, res) => {
//   res.send(`Started Working, Express!`);
// });

// app.listen(port, () => {
//   console.log(`Server listening at port: ${port}`);
// });

//==========================================================================================
//==========================================================================================
// Andere bron:
const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());
app.use(
  createProxyMiddleware({
    router: req => new URL(req.path.substring(1)),
    pathRewrite: (path, req) => new URL(req.path.substring(1)).pathname,
    changeOrigin: true,
    logger: console,
  })
);

app.listen(8088, () => {
  console.info('proxy server is running on port 8088');
});

//==========================================================================================
//==========================================================================================
// to start this server: Type in console: node app.js

// var express = require('express'),
//   request = require('request'),
//   bodyParser = require('body-parser'),
//   app = express();

// var myLimit = typeof process.argv[2] != 'undefined' ? process.argv[2] : '100kb';
// console.log('Using limit: ', myLimit);

// app.use(bodyParser.json({ limit: myLimit }));

// app.all('*', function (req, res, next) {
//   // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
//   res.header(
//     'Access-Control-Allow-Headers',
//     req.header('access-control-request-headers')
//   );

//   if (req.method === 'OPTIONS') {
//     // CORS Preflight
//     res.send();
//   } else {
//     var targetURL = req.header('Target-URL'); // Target-URL ie. https://example.com or http://example.com
//     if (!targetURL) {
//       res.send(500, {
//         error: 'There is no Target-Endpoint header in the request',
//       });
//       return;
//     }
//     request(
//       {
//         url: targetURL + req.url,
//         method: req.method,
//         json: req.body,
//         headers: { Authorization: req.header('Authorization') },
//       },
//       function (error, response, body) {
//         if (error) {
//           console.error('error: ' + response.statusCode);
//         }
//         //                console.log(body);
//       }
//     ).pipe(res);
//   }
// });

// app.set('port', process.env.PORT || 3000);

// app.listen(app.get('port'), function () {
//   console.log('Proxy server listening on port ' + app.get('port'));
// });
