//End Goal: Generate random number between 0 - 4 inclusive
//Generate random number 0-0.9999 -> Decimal
let randDecimal = Math.random();
console.log("randDecimal: ", randDecimal);
//Generate random number 0-4.9999 ->Number
let randNum = randDecimal * 5;
console.log("randNum: ", randNum);
//Generate random number 0-4 ->Integer
let randInt = Math.floor(randNum); //Rounds Down
console.log("randInt: ", randInt);