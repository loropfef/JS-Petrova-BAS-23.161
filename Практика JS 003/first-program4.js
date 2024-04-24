let days = 9;
let evenDayAmount = 200;
let oddDayAmount = 100;
let total = 0;
for (let i = 1; i <= days; i++) {
    if (i % 2 === 0) {
      total += evenDayAmount;
    } else {
      total += oddDayAmount;
    }
  }
  
  console.log("Протеин на период: " + total + " grams");
                       ТЕСТЫ:
  let days = 5;
let evenDayAmount = 200;
let oddDayAmount = 100;
let total = 0;
for (let i = 1; i <= days; i++) {
    if (i % 2 === 0) {
      total += evenDayAmount;
    } else {
      total += oddDayAmount;
    }
  }
  
  console.log("Протеин на период: " + total + " grams");
                  И ТП. ВСЁ ПОЛУЧИЛОСЬ :) 