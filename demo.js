class Animal {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(age, name) {
    super(age, name);
  }

  bark() {
    console.log(`ruf ruf ${this.name} ruf ${this.age}`);
  }
}

const snoopy = new Dog(3, 'Snoopy');
snoopy.bark();
