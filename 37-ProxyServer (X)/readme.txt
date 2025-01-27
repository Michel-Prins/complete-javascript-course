$ npm init -y
This will generate a basic package.json file with meta-data information about the project such as name, version, author and scripts.

$ npm install --save express http-proxy-middleware
express is a minimalistic web framework you can use to build API endpoints.
http-proxy-middleware is a third-party Node.js package that has all the tools to create an API proxy

After the package installation, define a start command for the project within the package.json file. You can use this command to start the application.


==================================================================================================================================
Uitleg: index.js
==================================================================================================================================

Let’s understand each step in the above program:

Step 1: The first segment of the code contains the import statements for express and http-proxy-middleware.

Step 2: The next statement creates an application instance using the call to express() function. This is followed by declaring a few important constants such as PORT, HOST and API_URL.

Step 3: Implement an endpoint /status to describe the role of the application. This endpoint has nothing to do with proxying requests. It simply provides a way to test our application.

Step 4: Next, we declare an object proxyOptions. This is a configuration object for our API proxy. It contains a few important properties

target - It defines the target host where you want to proxy requests. In our case, this is the https://jsonplaceholder.typicode.com
changeOrigin - This is set to true since we are proxying to a different origin.
pathRewrite - This is a very important property where you define the rules for rewriting the path. For example, the expression [^/api/posts]: '/posts' routes all incoming requests directed at URL /api/posts to just /posts. In other words, this will remove the /api prefix from the path.
Step 5: After declaring the configuration object, create the proxy object by calling createProxyMiddleware() function with the proxyOptions object as input.

Step 6: Next, create a request handler for the path /api/posts and pass the proxy object as handler for the incoming request.

Step 7: At the very end, start the Node.js API Proxy server to listen on the port and host that were already declared earlier.

You can start the application using the command npm run start.

==================================================================================================================================
START the PROXY
==================================================================================================================================

You can start the application using the command npm run start.
visit in this case: http://localhost:3000/api/posts/1