const car = {
  range: 620,
  fuleSpent: 20,
};

function calculateFuleConsumption() {
  console.log(this);
  return this.range / this.fuleSpent;
}

const newFunction = calculateFuleConsumption.bind(car); // Bound function
console.log(newFunction());

car.fuleSpent = 40;
console.log(newFunction());
