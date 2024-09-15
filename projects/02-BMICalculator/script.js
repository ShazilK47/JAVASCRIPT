const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const check = document.querySelector(".check");

  if (height < 0 || weight < 0) {
    results.innerHTML = `Please enter a valid height/weight`;
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `${bmi}`;
    if (bmi < 18.6) {
      check.innerHTML = "Under Weight";
    } else if (bmi > 18.6 && bmi <= 24.9) {
      check.innerHTML = "Normal Weight";
    } else if (bmi > 24.9) {
      check.innerHTML = "Over Weight";
    }
  }
});
