let temperature = 20;
let itsRaining = false;
let minutes;
if(itsRaining) {minutes = 0;}
if((temperature < 0) || (temperature > 35)){minutes = 0;}
if(temperature == 20){minutes = 20;}
if((temperature < 20) && (temperature > 0)){minutes = temperature;}
if((temperature > 20) && (temperature < 35)){minutes = 20 - (temperature-20);}
else{minutes = 0;};
console.log(minutes);