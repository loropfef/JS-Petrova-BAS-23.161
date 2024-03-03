let length = 1.83;
let weight = 75;
let fatMass = 0.8;
bodyMassIndex = weight / (length * length);
Math.round(bodyMassIndex);
fatPercent = (fatMass / weight) * 100;
Math.round(fatPercent);