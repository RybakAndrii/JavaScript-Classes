class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  
  get radius() {
    return this._radius;
  }

  
  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      console.error("Радіус повинен бути більше нуля.");
    }
  }


  get diameter() {
    return this._radius * 2;
  }


  calculateArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }

  
  calculateCircumference() {
    return 2 * Math.PI * this._radius;
  }
}


let myCircle = new Circle(5);

console.log("Радіус:", myCircle.radius); 
console.log("Діаметр:", myCircle.diameter); 
console.log("Площа:", myCircle.calculateArea().toFixed(2)); 
console.log("Довжина:", myCircle.calculateCircumference().toFixed(2)); 

myCircle.radius = 10;
console.log("Новий радіус:", myCircle.radius); 
console.log("Новий діаметр:", myCircle.diameter); 
console.log("Нова площа:", myCircle.calculateArea().toFixed(2)); 
console.log("Нова довжина:", myCircle.calculateCircumference().toFixed(2)); 3
