function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Ash";

  constructor() {
    console.log("Creating Person object...");
  }
}

const pers = new Person();

console.log(pers);
