import React from "react";
import ReactDOM from "react-dom/client";

const myFirstElement = <h1>Hello React~!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myFirstElement);

class Car {
  constructor(brandName) {
    this.brand = brandName;
  }

  present() {
    return "I have a " + this.brand;
  }
}

class Model extends Car {
  constructor(brandName, modelName) {
    super(brandName);
    this.model = modelName;
  }

  show() {
    return this.present() + ", it's a " + this.model;
  }
}

const mycar = new Model("Toyota", "Rav4");
console.log(mycar.show());

const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map(
  // The .map() method allows you to run a function on each item in the array
  (item) => {
    let string = `<p>${item}</p>`;
    console.log(string);
    return `<p>${item}</p>`;
  }
);
// In React, map() can be used to generate lists.
