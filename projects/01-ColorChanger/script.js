const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "red":
        body.style.backgroundColor = e.target.id;
        body.style.color = "white";
        break;
      case "grey":
        body.style.backgroundColor = e.target.id;
        body.style.color = "white";
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        body.style.color = "white";
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        body.style.color = "black";
        break;

      default:
        break;
    }
  });
});
