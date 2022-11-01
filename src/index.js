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
