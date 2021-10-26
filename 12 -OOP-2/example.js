// example of a class:
class Car {
  //constructor
  constructor(brand) {
    this.brand = brand;
  }
  // private
  #id = 1321;
  // getter
  get getId() {
    return this.#id;
  }

  //   method
  present() {
    return "I have a " + this.brand;
  }
  // function we will override
  show() {
    return "Nothing right now - we will override this function";
  }
}

// inheritance
class Model extends Car {
  constructor(brand, mod) {
    //Defining variables in a contractor with the help of inheritance
    super(brand);
    this.model = mod;
  }
  // overRiding
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

