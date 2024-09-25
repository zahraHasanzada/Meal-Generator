// Write all JS here. Do not write any JS in index.html

// Array of background colors
const bgColors = [
  "#9FE2BF",
  "#40E0D0",
  "#D7BDE2",
  "#85929E",
  "#F9E79F",
  "#73C6B6",
  "#F9E79F",
  "#C0392B",
  "#F4D03F",
  "#F4ECF7 ",
];

//Array for meals
const meals = [
  { name: "Ashak", src: "img/ashak.jpg", price: 20 },
  { name: "Bolani", src: "img/Bolani.jpg", price: 15 },
  { name: "Bosraq", src: "img/bosraq.jpg", price: 5 },
  { name: "Flafel", src: "img/flafl.jpg", price: 30 },
  { name: "Qhabeli", src: "img/ghabeli-polo.jpg", price: 25 },
  { name: "Kichri", src: "img/kichri.jpg", price: 18 },
  { name: "Kookoo", src: "img/kookoo.jpg", price: 6 },
  { name: "Mantu", src: "img/mantu-recipe.jpeg", price: 17 },
  { name: "Piza", src: "img/PIZA.jpg", price: 20 },
];

//Wallet cost
let wallet = 100;

//declare generateRandomNumber function
function generateRandomNumber(max) {
  console.log("Running generateRandomNumber function");
  const randomFinalNum = Math.floor(Math.random() * max);
  console.log(randomFinalNum);
  return randomFinalNum;
}

//declare generateBackgroundColor function
function generateBackgroundColor(none) {
  console.log("Running generateBackgroundColor function");
  console.log("Running generateBackgroundColor function");
  const randomBox = generateRandomNumber(bgColors.length);
  const randomColor = bgColors[randomBox];
  document.body.style.backgroundColor = randomColor;
  return none;
}

// generation of meals and background color
generateBackgroundColor();
generateMeals();

function generateMeals(none) {
  console.log("Running generateMeals function");

  //1.
  const meal1Box = generateRandomNumber(meals.length);
  const meal2Box = generateRandomNumber(meals.length);
  const meal3Box = generateRandomNumber(meals.length);

  const meal1 = meals[meal1Box];
  const meal2 = meals[meal2Box];
  const meal3 = meals[meal3Box];

  //2.
  document.querySelector("#meal1 img").src = meal1.src;
  document.querySelector(".card-body .card-title").textContent = meal1.name;
  document.querySelector(".card-body .price").textContent = meal1.price;

  document.querySelector("#meal2 img").src = meal2.src;
  document.querySelector("#meal2 .card-title").textContent = meal2.name;
  document.querySelector("#meal2 .price").textContent = meal2.price;

  document.querySelector("#meal3 img").src = meal3.src;
  document.querySelector("#meal3 .card-title").textContent = meal3.name;
  document.querySelector("#meal3 .price").textContent = meal3.price;
  //5
  calculateBill();
}

function calculateBill(none) {
  console.log("Running calculateBill function");
  const meal1Price = parseInt(
    document.querySelector("#meal1 .price").textContent
  );
  const meal2Price = parseInt(
    document.querySelector("#meal2 .price").textContent
  );
  const meal3Price = parseInt(
    document.querySelector("#meal3 .price").textContent
  );
  const total = meal1Price + meal2Price + meal3Price;
  document.querySelector("#total").textContent = total;
}
// add Event listener for "Generate Meals" button
document
  .querySelector("#generate-button")
  .addEventListener("click", generateMeals);

// Function to the purchase
function purchase(total) {
  console.log("Running purchase function");
  if (wallet >= total) {
    wallet -= total;
    document.querySelector("#wallet").textContent = wallet;
    document.querySelector("#message").classList.remove("invisible");
    generateMeals();
    generateBackgroundColor();
    document.querySelector("#purchase-cost").textContent = parseInt(total);
  } else {
    alert("Sorry, you cannot purchase the meals!");
    document.querySelector("#message").classList.add("invisible");
  }
}
function addFunds(funds) {
  console.log("Running purchase function");
}

// Event listener for "Purchase All Meals" button
document
  .querySelector("#purchase-button")
  .addEventListener("click", function () {
    const total = parseInt(document.querySelector("#total").textContent);
    purchase(total);
  });

// Function to add funds to the wallet
function addFunds(funds) {
  console.log("Running addFunds function");
  wallet += funds;
  console.log(wallet);
  document.querySelector("#wallet").textContent = wallet;
}

// Event listener for "Add Funds to Wallet" button
document
  .querySelector("#add-funds-button")
  .addEventListener("click", function () {
    const funds = parseInt(prompt("How much funds would you like to put in?"));
    addFunds(funds);
  });
