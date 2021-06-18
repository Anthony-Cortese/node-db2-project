const express = require("express");
const carRouter = require("./cars/cars-router.js");
const server = express();

// DO YOUR MAGIC
server.use(express.json());
server.use("/api/cars", carRouter);

server.get("*", (req, res) => {
  res.send(`<h2>Sorry Natalie Portman is not here</h2>`);
});

module.exports = server;
