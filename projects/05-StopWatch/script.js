let count = document.querySelector(".count");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let body = document.querySelector("body");
let countstart = 0;
let mints = 0;
let tens = 0;
let countstop;
let intervalID;

function counter() {
  if (mints < 10) {
    if (countstart < 10) {
      count.innerHTML = `0${mints}:0${countstart}`;
    } else if (countstart >= 10 && countstart < 60) {
      count.innerHTML = `0${mints}:${countstart}`;
    } else if (countstart == 60) {
      mints++;
      countstart = 0;
      count.innerHTML = `0${mints}:0${countstart}`;
    }
  } else {
    count.innerHTML = `10:0${countstart}`;
    if (countstart < 10) {
      count.innerHTML = `${mints}:0${countstart}`;
    } else if (countstart >= 10 && countstart < 60) {
      count.innerHTML = `${mints}:${countstart}`;
    } else if (countstart == 60) {
      mints++;
      countstart = 0;
      count.innerHTML = `${mints}:0${countstart}`;
    }
  }
  console.log(countstart);
  countstart++;
}

start.addEventListener("click", function (e) {
  if (!intervalID) {
    intervalID = setInterval(counter, 1000);
  }
});

stop.addEventListener("click", function (e) {
  clearInterval(intervalID);
  intervalID = null;
});

reset.addEventListener("click", function (e) {
  countstart = 0;
  mints = 0;
  count.innerHTML = `00:00`;
  clearInterval(intervalID);
  intervalID = null;
});

let bgColor = document.body.style.backgroundColor;

let bgChanger = document.querySelector(".bg-changer");
bgChanger.addEventListener("click", function (e) {
  let bgColor = document.body.style.backgroundColor;
  let clock = document.querySelector(".clock");

  console.log(`clock color `, clock.style.backgroundColor);
  console.log(`background color `, bgColor);
  if (bgColor === "black") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    bgChanger.style.backgroundColor = "black";
    bgChanger.style.color = "#fff";
    clock.style.backgroundColor = "black";
    count.style.color = "#fff";
    start.style.backgroundColor = "black";
    start.style.color = "white";
    stop.style.backgroundColor = "black";
    stop.style.color = "white";
    reset.style.backgroundColor = "black";
    reset.style.color = "white";
  } else if (bgColor === "white") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    bgChanger.style.backgroundColor = "white";
    bgChanger.style.color = "black";
    clock.style.backgroundColor = "white";
    count.style.color = "black";
    clock.style.boxShadow = "1px 1px 4px white";

    start.style.backgroundColor = "white";
    start.style.color = "black";
    stop.style.backgroundColor = "white";
    stop.style.color = "black";
    reset.style.backgroundColor = "white";
    reset.style.color = "black";
  }
});
