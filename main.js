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

let objVariables = {
  clickModifier: 1,
  cookieCounter: 0,
  cookiesPerSecond: 0,
  clickCost: 10,
  grandmaCost: 50,
  factoryCost: 250,
  robotCost: 500,
  chocolateCost: 1250,
  bankCost: 1000,
  mineCost: 12500,
  spaceshipCost: 15000,
  stockCost: 30000,
  frogCost: 50000,
  clickAmount: 0,
  grandmaAmount: 0,
  factoryAmount: 0,
  robotAmount: 0,
  chocolateAmount: 0,
  bankAmount: 0,
  spaceshipAmount: 0,
  stockAmount: 0,
  frogAmount: 0, 
};

function save(){
/* 
  for(i = 0;i < arrayVariables.length; i++){
    if(arrayVariables[i] != null){
      objVariables.objVariables[i] = arrayVariables[i]
    }
  } */

  objVariables.clickModifier = clickModifier;
  objVariables.cookieCounter = cookieCounter;
  objVariables.cookiesPerSecond = cookiesPerSecond;
  objVariables.clickCost = clickCost;
  objVariables.grandmaCost = grandmaCost;
  objVariables.factoryCost = factoryCost;
  objVariables.robotCost = robotCost;
  objVariables.chocolateCost = chocolateCost;
  objVariables.bankCost = bankCost;
  objVariables.mineCost = mineCost;
  objVariables.spaceshipCost = spaceshipCost;
  objVariables.stockCost = stockCost;
  objVariables.frogCost = frogCost;
  objVariables.clickAmount = clickAmount;
  objVariables.grandmaAmount = grandmaAmount;
  objVariables.factoryAmount = factoryAmount;
  objVariables.factoryAmount = factoryAmount;
  objVariables.robotAmount = robotAmount;
  objVariables.chocolateAmount = chocolateAmount;
  objVariables.bankAmount = bankAmount;
  objVariables.spaceshipAmount = spaceshipAmount;
  objVariables.stockAmount = stockAmount;
  objVariables.frogAmount = frogAmount;

  let save = JSON.stringify(objVariables);
  let encodedData = btoa(save)
  localStorage.setItem("data", JSON.stringify(encodedData));

  console.log("Saved!")
}

function loadSave() {
  let saveData = JSON.parse(localStorage.getItem("data"))
  let decodedData = atob(saveData);
  
  let obj = new Object(JSON.parse(decodedData));
  
  //change amounts (in for loop?)
  clickModifier = obj.clickModifier;
  cookieCounter = obj.cookieCounter;
  cookiesPerSecond = obj.cookiesPerSecond;
  clickCost = obj.clickCost;
  grandmaCost = obj.grandmaCost;
  factoryCost = obj.factoryCost;
  robotCost = obj.robotCost;
  chocolateCost = obj.chocolateCost;
  bankCost = obj.bankCost;
  mineCost = obj.mineCost;
  spaceshipCost = obj.spaceshipCost;
  stockCost = obj.stockCost;
  frogCost = obj.frogCost;
  clickAmount = obj.clickAmount;
  grandmaAmount = obj.grandmaAmount;
  factoryAmount = obj.factoryAmount;
  factoryAmount = obj.factoryAmount;
  robotAmount = obj.robotAmount;
  chocolateAmount = obj.chocolateAmount;
  bankAmount = obj.bankAmount;
  spaceshipAmount = obj.spaceshipAmount;
  stockAmount = obj.stockAmount;
  frogAmount = obj.frogAmount;

  //change textboxes
  refreshTextboxes();
}

let arrUpgrades = [
  "grandma",
  "factory",
  "robots",
  "chocolate",
  "bank",
  "mine",
  "spaceship",
  "stock",
  "frog",
];

function refreshTextboxes(){
  for(i = 0; i < arrUpgrades.length; i++){
    if(arrUpgrades[i] == "grandma"){
      updateTextBox(arrUpgrades[i] + "Amount", grandmaAmount);
      updateTextBox(arrUpgrades[i] + "Cost", grandmaCost);
    }
    else if(arrUpgrades[i] == "factory"){
      updateTextBox(arrUpgrades[i] + "Amount", factoryAmount);
      updateTextBox(arrUpgrades[i] + "Cost", factoryCost);
    }
    else if(arrUpgrades[i] == "robot"){
      updateTextBox(arrUpgrades[i] + "Amount", robotAmount);
      updateTextBox(arrUpgrades[i] + "Cost", robotCost);
    }
    else if(arrUpgrades[i] == "chocolate"){
      updateTextBox(arrUpgrades[i] + "Amount", chocolateAmount);
      updateTextBox(arrUpgrades[i] + "Cost", chocolateCost);
    }
    else if(arrUpgrades[i] == "bank"){
      updateTextBox(arrUpgrades[i] + "Amount", bankAmount);
      updateTextBox(arrUpgrades[i] + "Cost", bankCost);
    }
    else if(arrUpgrades[i] == "mine"){
      updateTextBox(arrUpgrades[i] + "Amount", mineAmount);
      updateTextBox(arrUpgrades[i] + "Cost", mineCost);
    }
    else if(arrUpgrades[i] == "spaceship"){
      updateTextBox(arrUpgrades[i] + "Amount", spaceshipAmount);
      updateTextBox(arrUpgrades[i] + "Cost", spaceshipCost);
    }
    else if(arrUpgrades[i] == "stock"){
      updateTextBox(arrUpgrades[i] + "Amount", stockAmount);
      updateTextBox(arrUpgrades[i] + "Cost", stockCost);
    }
    else if(arrUpgrades[i] == "frog"){
      updateTextBox(arrUpgrades[i] + "Amount", frogAmount);
      updateTextBox(arrUpgrades[i] + "Cost", frogCost);
    }
  }

  cookies = document.getElementById("cookieAmount");
  cookies.innerHTML = convertNumber(cookieCounter);
  cookiesPerS = document.getElementById("cookieAmountPerSecond");
  cookiesPerS.innerHTML = `${convertNumber(cookiesPerSecond)} C/s`
}

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
    updateCookieCounter();
    cps(1);
  } else if (buttonId == "factory" && canAfford(factoryCost)) {
    upgrade(factoryCost);
    factoryAmount += 1;
    factoryCost = updateCost(factoryCost);
    updateCookieCounter();
    cps(3);
  } else if (buttonId == "robot" && canAfford(robotCost)) {
    upgrade(robotCost);
    robotAmount += 1;
    robotCost = updateCost(robotCost);
    updateCookieCounter();
    cps(6);
  } else if (buttonId == "chocolate" && canAfford(chocolateCost)) {
    upgrade(chocolateCost);
    chocolateAmount += 1;
    chocloateCost = updateCost(chocolateCost);
    updateCookieCounter();
    cps(24);
  } else if (buttonId == "bank" && canAfford(bankCost)) {
    upgrade(bankCost);
    bankAmount += 1;
    bankCost = updateCost(bankCost);
    updateCookieCounter();
    cps(48);
  } else if (buttonId == "mine" && canAfford(mineCost)) {
    upgrade(mineCost);
    mineAmount += 1;
    mineCost = updateCost(mineCost);
    updateCookieCounter();
    cps(200);
  } else if (buttonId == "spaceship" && canAfford(spaceshipCost)) {
    upgrade(spaceshipCost);
    spaceshipAmount += 1;
    spaceshipCost = updateCost(spaceshipCost);
    updateCookieCounter();
    cps(600);
  } else if (buttonId == "stock" && canAfford(stockCost)) {
    upgrade(stockCost);
    stockAmount += 1;
    stockCost = updateCost(stockCost);
    updateCookieCounter();
    cps(1000);
  } else if (buttonId == "frog" && canAfford(frogCost)) {
    upgrade(frogCost);
    frogAmount += 1;
    frogCost = updateCost(frogCost);
    updateCookieCounter();
    cps(1500);
  }
  refreshTextboxes();
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
        cookieCounter = cookieCounter + (cookiesPerSecond / 2);
        updateCookieCounter();
        if (cookiesPerSecond > 0) {
          myLoop();
        }
      }, 500);
    }
  }
  myLoop();
}


document.getElementById("year").innerHTML = "©" + new Date().getFullYear();
