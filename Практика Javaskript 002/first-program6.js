let time = 15;
let goToDairy = false;
let goToStore = false;
let goToMarket = false;
if (time >= 8 && time < 13 || time >= 14 && time < 19) goToDairy = true
else if (time >= 13 && time < 14) goToStore = true
else if (time === 7 || time === 20 || time >= 19 && time < 20) goToMarket = true
else {goToDairy = false; goToStore = false; goToMarket = false};
console.log(goToDairy);
console.log(goToStore);
console.log(goToMarket);