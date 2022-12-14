/**
 * Express server
 */

const fs = require("fs");
const express = require("express");
const card = require("./public/card");
const app = express();
const port = 3000;

const frontSide = fs
  .readFileSync("./public/frontTemplate.html", "utf-8")
  .replace("{{onFront}}", card.onFront)
  .replace("{{onBack}}", card.onBack)
  .replace("{{setProps}}", card.setProps);

const backSide = fs
  .readFileSync("./public/backTemplate.html", "utf-8")
  .replace("{{onFront}}", card.onFront)
  .replace("{{onBack}}", card.onBack)
  .replace("{{FrontSide}}", frontSide);

const cardTemplate = fs.readFileSync("./cardTemplate.html", "utf-8");

app.use(express.static("public"));

app.get("/", (req, res) => res.send("Anki Dev Env"));

app.get("/front", (req, res) => {
  res.send(cardTemplate.replace("{{Card}}", frontSide + `<a href="/back">Show Back</a>`));
});

app.get("/back", (req, res) => {
  res.send(cardTemplate.replace("{{Card}}", backSide + `<a href="/front">Show Front</a>`));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
