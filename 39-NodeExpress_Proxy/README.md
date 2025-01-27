https://blog.logrocket.com/how-to-set-up-node-typescript-express/?source=post_page-----ac62e87d4aa6--------------------------------

Start new project:
cd in folder

npm init -y

=> When initializing a package.json file in this manner, the --yes or -y flag utilizes the default settings configured by npm, bypassing the repeated questions asking for project details

Creating a minimal server with Express:

npm i express dotenv

=> The DotEnv package is used to read environment variables from a .env file. Instead of hardcoding environment-specific variables directly into the app, include them all in this file and utilize the DotEnv package to manage them.

TEST => Start the server

node src/index.js

HOT reload in dev:

npm i -D nodemon

add to package.json: "dev": "nodemon src/index.js"
RUN in DEV:

npm run dev

===============================================================
Andere
===============================================================
npm install --save express http-proxy-middleware

express is a minimalistic web framework you can use to build API endpoints.
http-proxy-middleware is a simple Node.js package to create an API proxy
