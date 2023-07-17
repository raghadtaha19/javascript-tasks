let color = document.querySelector(".color");
document.body.style.backgroundColor = sessionStorage.getItem("color");

color.addEventListener("input", function () {
  document.body.style.backgroundColor = color.value;
  sessionStorage.setItem("color", color.value);
});