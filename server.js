const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/greeting", (req, res) => {
  res.send("<h1>Hello Stranger</h1>");
});

app.get("/greeting/:name", (req, res) => {
  console.log(req.params);
  res.send(`Wow! What's up ${req.params.name}`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  console.log(req.params);
  const { total, tipPercentage } = req.params;
  res.send(`How much your tip will be ${tipPercentage}`);
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
