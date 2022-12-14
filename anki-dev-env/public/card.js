// const card = {
//   front: "Loading front...",
//   back: "Loading back...",
//   onFront: `<pre>const front = document.getElementById("front");
//     const tspInTbps = 3;
//     let tsp, tbsp;
//     if (!window.answer) {
//         tsp = Math.floor(Math.random() * 10);
//         tbsp = tsp / tspInTbps;
//         window.answer = tbsp;
//     }
//     front.innerHTML = "how many tbsp is " + tsp + "tsp?";
//     </pre>
//     `,
//   onBack: `<pre>const back = document.getElementById("back");
//     back.innerHTML = window.answer + " tbsp";
//     </pre>`,
// };

const front = "Loading front...";
const back = "Loading back...";

const onFront = (data = {}) => {
  const element = document.querySelector("#front");
  const tspInTbps = 3;
  if (Object.keys(data).length === 0) {
    data.tsp = Math.floor(Math.random() * 10);
    data.tbsp = data.tsp / tspInTbps;
  }
  element.innerHTML = "how many tbsp is " + data.tsp + "tsp?";
  return data;
};

const onBack = (data) => {
  const element = document.querySelector("#back");
  element.innerHTML = data.tbsp + " tbsp";
  return data;
};

const card = {
  front,
  back,
  onFront: onFront.toString(),
  onBack: onBack.toString(),
};

module.exports = card;
