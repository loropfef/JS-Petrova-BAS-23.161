let weight = 75;
let height= 183;
let age = 25;
let activityRate = 1.725;
metabolicRate = (88.362 + (13.397 * weight)) + (4.799 * length) - (5.677 * age);
calorieRate = metabolicRate * activityRate;
proteins = 40 / calorieRate;
Math.round(proteins);
fats = 25 / calorieRate;
Math.round(fats);
carbohydrates = 35 / calorieRate;
Math.round(carbohydrates);