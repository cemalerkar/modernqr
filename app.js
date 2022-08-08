var food = document.getElementById("foods");
var vegan = document.getElementById("vegans");
var dessert = document.getElementById("desserts");
var drink = document.getElementById("drinks");

function CloseAllTabs() {
  food.classList.remove("active");
  vegan.classList.remove("active");
  dessert.classList.remove("active");
  drink.classList.remove("active");
}
