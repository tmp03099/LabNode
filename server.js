const express = require("express");

const app = express();

//Magic 8 ball
const magicAnswer = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

//Greetings
app.get("/greeting", (req, res) => {
  res.send("<h1>Hello Stranger</h1>");
});

app.get("/greeting/:name", (req, res) => {
  console.log(req.params);
  res.send(`Wow! What's up ${req.params.name}`);
});

//Tip Calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
  console.log(req.params);
  const { total, tipPercentage } = req.params;
  res.send(`How much your tip will be? ${tipPercentage} %`);
});

//Magic 8 Ball
app.get("/magic", (req, res) => {
  res.send("<h1>magic ball</h1>");
});

app.get("/magic/:question", (req, res) => {
  const random = Math.floor(Math.random() * magicAnswer.length);
  const item = magicAnswer[random];
  res.send(`${req.params.question} <h1> ${item} </h1>`);
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
