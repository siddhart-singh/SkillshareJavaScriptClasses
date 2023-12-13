"use strict";

class Person {
  static species = "Homo Sapiens";

  static speciesSentence() {
    return `Humans are classified as ${this.species()}`;
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  setFirstName(name) {
    this.firstName = name;
  }

  setLastName(name) {
    this.lastName = name;
  }
}

const person1 = new Person("Siddhart", "Singh");
console.log(person1);
console.log(Person.species, Person.speciesSentence());
