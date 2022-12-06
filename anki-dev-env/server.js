/**
 * Express server
 */

const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

const Front = "Loading front...";
const Back = "Loading back...";

const onFront = `<pre>const front = document.getElementById("front");
if (!window.answer) {
    window.answer = Math.random();
}
front.innerHTML = "front side loaded w/ answer: " + window.answer;
</pre>
`;
const onBack = `<pre>const back = document.getElementById("back");
back.innerHTML = "back side loaded w/ answer: " + window.answer;
throw new Error("error");
</pre>`;

const frontSide = fs
  .readFileSync("./public/frontTemplate.html", "utf-8")
  .replace("{{Front}}", Front)
  .replace("{{Back}}", Front)
  .replace("{{onFront}}", onFront)
  .replace("{{onBack}}", onBack);

const backSide = fs
  .readFileSync("./public/backTemplate.html", "utf-8")
  .replace("{{Front}}", Front)
  .replace("{{Back}}", Front)
  .replace("{{onFront}}", onFront)
  .replace("{{onBack}}", onBack)
  .replace("{{FrontSide}}", frontSide);

const card = fs.readFileSync("./cardTemplate.html", "utf-8");

app.use(express.static("public"));

app.get("/", (req, res) => res.send("Anki Dev Env"));

app.get("/front", (req, res) => {
  res.send(
    card.replace("{{Card}}", frontSide + `<a href="/back">Show Back</a>`)
  );
});

app.get("/back", (req, res) => {
  res.send(
    card.replace("{{Card}}", backSide + `<a href="/front">Show Front</a>`)
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
