let price = 4000;
let discountedPrice;
if(price < 1000) {discountedPrice = price * 1};
if((price >= 1000) && (price < 3000)) {discountedPrice = price - (price * 0.05);};
if((price >= 3000) && (price < 5000)) {discountedPrice = price - (price * 0.1);};
if(price >= 5000) {discountedPrice = price - (price * 0.15);};
console.log(discountedPrice);