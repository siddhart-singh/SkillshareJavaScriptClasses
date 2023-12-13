"use strict";

class Person {
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
