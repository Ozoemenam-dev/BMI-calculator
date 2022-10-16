//variable declaration
// let fullName = "Brandon \"Anderson\"";
// console.log(fullName)

// let size = 14;
// size = size.toString();
// console.log(typeof size);

// let size = "14";
// size = Number.parseInt("14");
// console.log(size)
// console.log(typeof size)

// let name = {
//   firstName: "john",
//   lastName: "cena"
// }

// console.log(name.firstName)

// let zuri = ["mark", "james", "cole","matter"]
// console.log(Math.floor(Math.random() * zuri.length))

function bmiCalculator(weight, height) {
  var bmi = Math.floor(weight / Math.pow(height, 2));
  return bmi;
}
console.log(bmiCalculator(65, 1.8))