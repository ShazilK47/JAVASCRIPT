let boxes = document.getElementById("boxes");

boxes.addEventListener(
  "click",
  function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === "LI") {
      let removeIt = e.target;
      removeIt.remove();
    }
  },

  false
);
