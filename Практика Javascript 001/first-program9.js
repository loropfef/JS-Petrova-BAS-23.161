let age = 17;
let pulseAtRest = 60;
let intensity = 75;
pulseAtWorkout = ((220 - age) - (pulseAtRest)) * (intensity +  pulseAtRest);
Math.round(pulseAtWorkout);