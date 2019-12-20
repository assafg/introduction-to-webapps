function Car() {
  this.speed = 100;
  this.drive = function() {
    console.log('speed:', this.speed);
  };
}

const car = new Car();

const params = {
  speed: 120,
};

car.drive();

car.drive.call(params);
