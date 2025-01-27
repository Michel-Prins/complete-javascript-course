// // src/index.js
// const express = require("express");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();
// const port = process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("King: En we zijn erweer!");
// });

// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });

// import { Router } from "express";
// import proxyRequest from "./request";
// const router = Router();

// router.get("/*", async (req, res) => await proxyRequest(req, res));
// router.post("/*", async (req, res) => await proxyRequest(req, res));
// router.put("/*", async (req, res) => await proxyRequest(req, res));
// router.patch("/*", async (req, res) => await proxyRequest(req, res));
// router.delete("/*", async (req, res) => await proxyRequest(req, res));

// export default router;

// import { IncomingHttpHeaders } from "http";
// import { Request, Response } from "express";
// import fetch, { Headers } from "node-fetch";

// async function copyRequiredHeaders(
//   incomingHeaders: IncomingHttpHeaders
// ): Promise<Headers> {
//   const localHeaders = new Headers();

//   // Preserve the Accept header
//   if (incomingHeaders["accept"]) {
//     localHeaders.append("accept", incomingHeaders["accept"]);
//   }

//   // Preserve If-Match
//   if (incomingHeaders["if-match"]) {
//     localHeaders.append("if-match", incomingHeaders["if-match"]);
//   }

//   // Preserve Content-Type
//   if (incomingHeaders["content-type"]) {
//     localHeaders.append("content-type", incomingHeaders["content-type"]);
//   }

//   return localHeaders;
// }

// export default async function proxyRequest(req: Request, res: Response): Promise<void> {
//   const url = req.path.replace("/proxy", ``);
//   const domain = 'https://reqres.in/api'
//   const newUrl = `${domain}${url}`;
//   const headers = await copyRequiredHeaders(req.headers);
//   const authData = {
//     token: 'attached custom token', // amy data you required
//     date: new Date().toUTCString()
//   }

//   const response = await fetch(newUrl, {
//     method: req.method,
//     headers: {
//       ...headers,
//       Authorization: authData.token,
//       "x-version": "2016-07-11",
//       "x-date": authData.date,
//     },
//     body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
//   });

//   const responseType = response.headers.get("content-type") ?? "application/json";
//   const bodyData = await response.buffer();
//   res
//     .status(response.status)
//     .type(responseType)
//     .set({
//       "request-id": response.headers.get("request-id"),
//       "client-request-id": response.headers.get("client-request-id"),
//     })
//     .send(bodyData);
// }

// const url = req.path.replace("/proxy", ``);
// const domain = 'https://reqres.in/api'
// const newUrl = `${domain}${url}`;
// const headers = await copyRequiredHeaders(req.headers);
// const authData = {
//   token: 'attached custom token', // amy data you required
//   date: new Date().toUTCString()
// }

// const response = await fetch(newUrl, {
//   method: req.method,
//   headers: {
//     ...headers,
//     Authorization: authData.token,
//     "x-version": "2016-07-11",
//     "x-date": authData.date,
//   },
//   body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
// });

// const responseType = response.headers.get("content-type") ?? "application/json";
// const bodyData = await response.buffer();
// res
//   .status(response.status)
//   .type(responseType)
//   .set({
//     "request-id": response.headers.get("request-id"),
//     "client-request-id": response.headers.get("client-request-id"),
//   })
//   .send(bodyData);
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const PORT = 3000;
const HOST = "localhost";

const API_URL = "https://jsonplaceholder.typicode.com";

app.get("/status", (req, res, next) => {
  res.send("This is a proxy service");
});

const proxyOptions = {
  target: API_URL,
  changeOrigin: true,
  pathRewrite: {
    [`^/api/posts`]: "/posts",
  },
};

const proxy = createProxyMiddleware(proxyOptions);

app.use("/api/posts", proxy);

app.listen(PORT, HOST, () => {
  console.log(`Proxy Started at ${HOST}:${PORT}`);
});
