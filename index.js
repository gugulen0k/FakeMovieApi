const express = require("express");
const http = require("http");
const app = express();
const importData = require("./MovieData.json");
let port = process.env.PORT || 3001;

// setInterval(function () {
//   http.get("https://moviedataapi.herokuapp.com");
//   console.log("Visited the api server");
// }, 3600000); // every hour

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, PATCH, DELETE, OPTIONS"
    );
    res.header("Access-Control-Max-Age", 120);
    return res.status(200).json({});
  }

  next();
});

app.get("/", (req, res) => {
  res.send("Fake movie data API");
});

app.get("/movie_list", (req, res) => {
  res.send(importData);
});

app.use;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
