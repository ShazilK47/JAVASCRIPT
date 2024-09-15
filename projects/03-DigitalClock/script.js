let clock = document.getElementById("clock");
let body = document.querySelector("body");

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

let bgColor = document.body.style.backgroundColor;

let bgChanger = document.querySelector(".bg-changer");
bgChanger.addEventListener("click", function (e) {
  let bgColor = document.body.style.backgroundColor;
  clock = document.getElementById("clock");
  console.log(`clock color `, clock.style.backgroundColor);
  console.log(`background color `, bgColor);
  if (bgColor === "black") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    bgChanger.style.backgroundColor = "black";
    bgChanger.style.color = "#fff";
    clock.style.backgroundColor = "black";
    clock.style.color = "white";
  } else if (bgColor === "white") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    bgChanger.style.backgroundColor = "white";
    bgChanger.style.color = "black";
    clock.style.backgroundColor = "white";
    clock.style.color = "black";
    clock.style.boxShadow = "1px 1px 4px white";
  }
});
