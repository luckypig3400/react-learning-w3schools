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

const mycar = new Car("Toyota");
console.log(mycar.present());