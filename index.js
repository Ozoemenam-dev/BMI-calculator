

function bmiCalculator(weight, height) {
  var bmi = Math.floor(weight / Math.pow(height, 2));
  return bmi;
}
console.log("Your Body Mass Index is " + bmiCalculator(65, 1.8))