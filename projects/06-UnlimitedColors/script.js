let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let body = document.querySelector("body");

let intervalID = null;
let color = "#";
let colorId = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function colorChanger() {
  //   console.log(Math.floor(Math.random() * 16));
  for (let i = 0; i < 6; i++) {
    color += `${colorId[Math.floor(Math.random() * 16)]}`;
  }
  body.style.backgroundColor = `${color}`;
  body.style.color = `white`;
  console.log(color);
  color = "#";
}

start.addEventListener("click", function (e) {
  if (!intervalID) {
    intervalID = setInterval(colorChanger, 1000);
  }
});

stop.addEventListener("click", function () {
  clearInterval(intervalID);
  intervalID = null;
});
