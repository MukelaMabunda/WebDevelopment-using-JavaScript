let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) { console.log("Mark's BMI is higher than John's!"); }
else { console.log("John's BMI is higher than Mark's!"); }