"use strict";

function Person(firstName, lastName) {
  let secret = "Gatorade";
  this.firstName = firstName;
  this.lastName = lastName;
  this.hasJob = false;

  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };

  this.setFirstName = function (name) {
    this.firstName = name;
  };

  this.setLastName = function (name) {
    this.LastName = name;
  };

  this.getSecret = function () {
    return secret;
  };
}


