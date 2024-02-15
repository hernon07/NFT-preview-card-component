const h1 = document.querySelector("h1");
const img = document.querySelector(".img");
const eye = document.querySelector(".eye");

h1.addEventListener("mouseover", function () {
  h1.style.color = "hsl(178, 100%, 50%)";
  img.style.invert = "100%";
  eye.style.display = "unset";
});

h1.addEventListener("mouseout", function () {
  h1.style.color = "hsl(0, 0%, 100%)";
  eye.style.display = "none";
});
