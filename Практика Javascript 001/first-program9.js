let age = 17;
let pulseAtRest = 60;
let intensity = 75;
let pulseAtWorkout;
pulseAtWorkout = ((220 - age) - (pulseAtRest)) * (intensity +  pulseAtRest);
Math.round(pulseAtWorkout);
