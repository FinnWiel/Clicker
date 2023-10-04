let cookieCounter = 0;
let clickModifier = 1;
let cookiesPerSecond = 0;

let clickAmount = 0;
let grandmaAmount = 0;
let factoryAmount = 0;
let robotAmount = 0;
let chocolateAmount = 0;
let bankAmount = 0;
let mineAmount = 0;
let spaceshipAmount = 0;
let stockAmount = 0;
let frogAmount = 0;

let clickCost = 10;
let grandmaCost = 50;
let factoryCost = 250;
let robotCost = 500;
let chocolateCost = 1250;
let bankCost = 1000;
let mineCost = 12500;
let spaceshipCost = 15000;
let stockCost = 30000;
let frogCost = 50000;

function clickCookie() {
  cookieCounter += clickModifier;
  updateCookieCounter();

  let mini = document.getElementById("miniCookie");

  var randomChance = Math.random();
  if (randomChance < 0.005) {
    mini.style.display = "block";
    mini.style.left = Math.floor(Math.random() * 80) + "vw";
    mini.style.top = Math.floor(Math.random() * 80) + "vh";
  }
}

function goldenCookie() {
  let mini = document.getElementById("miniCookie");
  let modifier = document.getElementById("clickMod");
  let cps = document.getElementById("cookieAmountPerSecond");

  let clickUpgrade = document.getElementById("upgradeButton");
  let gandmaUpgrade = document.getElementById("grandma");
  let factoryUpgrade = document.getElementById("factory");
  let robotUpgrade = document.getElementById("robot");
  let chocUpgrade = document.getElementById("chocolate");
  let bankUpgrade = document.getElementById("bank");
  let mineUpgrade = document.getElementById("mine");
  let spaceUpgrade = document.getElementById("spaceship");
  let stockUpgrade = document.getElementById("stock");
  let frogUpgrade = document.getElementById("frog");

  let upgrades = [
    clickUpgrade,
    gandmaUpgrade,
    factoryUpgrade,
    robotUpgrade,
    chocUpgrade,
    bankUpgrade,
    mineUpgrade,
    spaceUpgrade,
    stockUpgrade,
    frogUpgrade,
  ];

  mini.style.display = "none";

  clickModifier = clickModifier * 2;
  cookiesPerSecond = cookiesPerSecond * 2;
  modifier.innerHTML = `+${clickModifier} Cookies`;
  cps.innerHTML = `${cookiesPerSecond} C/s`;

  for (i = 0; i < upgrades.length; i++) {
    upgrades[i].disabled = true;
  }

  setTimeout(function () {
    clickModifier = clickModifier / 2;
    cookiesPerSecond = cookiesPerSecond / 2;
    modifier.innerHTML = `+${clickModifier} Cookies`;
    cps.innerHTML = `${cookiesPerSecond} C/s`;
    for (i = 0; i < upgrades.length; i++) {
      upgrades[i].disabled = false;
    }
  }, 5000);
}

function clickUpgrade() {
  let modifier = document.getElementById("clickMod");
  let clickUpgradeCost = document.getElementById("clickCost");
  let clickUpgradeAmount = document.getElementById("clickAmount");

  if (cookieCounter >= clickCost) {
    cookieCounter = cookieCounter - clickCost;
    updateCookieCounter();
    clickModifier += 0.5;
    clickAmount = clickAmount + 1;
    clickUpgradeAmount.innerHTML = clickAmount;
    clickCost = Math.round(clickCost * 1.05);
    let costValue = convertNumber(clickCost);
    clickUpgradeCost.innerHTML = `$${costValue}`;
    modifier.innerHTML = `+${clickModifier} Cookies`;
  }
}

function reciever(buttonId) {
  if (buttonId == "grandma" && canAfford(grandmaCost)) {
    upgrade(grandmaCost);
    grandmaAmount += 1;
    grandmaCost = updateCost(grandmaCost);
    updateTextBox(buttonId + "Amount", grandmaAmount);
    updateTextBox(buttonId + "Cost", grandmaCost);
    updateCookieCounter();
    cps(1);
    resetMultiplier();
  } else if (buttonId == "factory" && canAfford(factoryCost)) {
    upgrade(factoryCost);
    factoryAmount += 1;
    factoryCost = updateCost(factoryCost);
    updateTextBox(buttonId + "Amount", factoryAmount);
    updateTextBox(buttonId + "Cost", factoryCost);
    updateCookieCounter();
    cps(3);
    resetMultiplier();
  } else if (buttonId == "robot" && canAfford(robotCost)) {
    upgrade(robotCost);
    robotAmount += 1;
    robotCost = updateCost(robotCost);
    updateTextBox(buttonId + "Amount", robotAmount);
    updateTextBox(buttonId + "Cost", robotCost);
    updateCookieCounter();
    cps(6);
    resetMultiplier();
  } else if (buttonId == "chocolate" && canAfford(chocolateCost)) {
    upgrade(chocolateCost);
    chocolateAmount += 1;
    chocloateCost = updateCost(chocolateCost);
    updateTextBox(buttonId + "Amount", chocolateAmount);
    updateTextBox(buttonId + "Cost", chocolateCost);
    updateCookieCounter();
    cps(24);
    resetMultiplier();
  } else if (buttonId == "bank" && canAfford(bankCost)) {
    upgrade(bankCost);
    bankAmount += 1;
    bankCost = updateCost(bankCost);
    updateTextBox(buttonId + "Amount", bankAmount);
    updateTextBox(buttonId + "Cost", bankCost);
    updateCookieCounter();
    cps(48);
    resetMultiplier();
  } else if (buttonId == "mine" && canAfford(mineCost)) {
    upgrade(mineCost);
    mineAmount += 1;
    mineCost = updateCost(mineCost);
    updateTextBox(buttonId + "Amount", mineAmount);
    updateTextBox(buttonId + "Cost", mineCost);
    updateCookieCounter();
    cps(200);
    resetMultiplier();
  } else if (buttonId == "spaceship" && canAfford(spaceshipCost)) {
    upgrade(spaceshipCost);
    spaceshipAmount += 1;
    spaceshipCost = updateCost(spaceshipCost);
    updateTextBox(buttonId + "Amount", spaceshipAmount);
    updateTextBox(buttonId + "Cost", spaceshipCost);
    updateCookieCounter();
    cps(600);
    resetMultiplier();
  } else if (buttonId == "stock" && canAfford(stockCost)) {
    upgrade(stockCost);
    stockAmount += 1;
    stockCost = updateCost(stockCost);
    updateTextBox(buttonId + "Amount", stockAmount);
    updateTextBox(buttonId + "Cost", stockCost);
    updateCookieCounter();
    cps(1000);
    resetMultiplier();
  } else if (buttonId == "frog" && canAfford(frogCost)) {
    upgrade(frogCost);
    frogAmount += 1;
    frogCost = updateCost(frogCost);
    updateTextBox(buttonId + "Amount", frogAmount);
    updateTextBox(buttonId + "Cost", frogCost);
    updateCookieCounter();
    cps(1500);
    resetMultiplier();
  }
}

function canAfford(cost) {
  return cookieCounter > cost;
}

function upgrade(cost) {
  cookieCounter -= cost;
}

function updateTextBox(Id, amount) {
  let textBox = document.getElementById(Id);
  if (Id.includes("Cost")) {
    let price = convertNumber(amount);
    textBox.innerHTML = `$${price}`;
  } else {
    textBox.innerHTML = amount;
  }
}

function updateCost(cost) {
  return cost * 1.1;
}

function updateCookieCounter() {
  let cookieText = document.getElementById("cookieAmount");
  let cookieValue = convertNumber(cookieCounter);
  cookieText.innerText = cookieValue;
}

function convertNumber(numberValue) {
  // Nine Zeroes for Billions
  return Math.abs(Number(numberValue)) >= 1.0e9
    ? (Math.abs(Number(numberValue)) / 1.0e9).toFixed(2) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(numberValue)) >= 1.0e6
    ? (Math.abs(Number(numberValue)) / 1.0e6).toFixed(2) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(numberValue)) >= 1.0e3
    ? (Math.abs(Number(numberValue)) / 1.0e3).toFixed(2) + "K"
    : Math.abs(Number(numberValue)).toFixed(2);
}

function cps(x) {
  let cookieCPSValue;
  if (cookiesPerSecond <= 0) {
    cookiesPerSecond += x;
    cookieCPSValue = convertNumber(cookiesPerSecond);
    secondCookies = document.getElementById("cookieAmountPerSecond");
    secondCookies.innerHTML = cookieCPSValue + " C/s";
    loop();
  } else {
    cookiesPerSecond += x;
    cookieCPSValue = convertNumber(cookiesPerSecond);
    secondCookies = document.getElementById("cookieAmountPerSecond");
    secondCookies.innerHTML = cookieCPSValue + " C/s";
  }
}

function loop() {
  if (cookiesPerSecond > 0) {
    function myLoop() {
      setTimeout(function () {
        cookieCounter = cookieCounter + cookiesPerSecond;
        updateCookieCounter();
        if (cookiesPerSecond > 0) {
          myLoop();
        }
      }, 1000);
    }
  }
  myLoop();
}

document.getElementById("year").innerHTML = "©" + new Date().getFullYear();