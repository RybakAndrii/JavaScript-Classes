
class Marker {
  constructor(color, inkAmount) {
    this.color = color;
    this.inkAmount = inkAmount; 
  }

  
  write(text) {
    let inkNeeded = 0.5;
    let result = "";

    for (let char of text) {
      if (this.inkAmount <= 0) {
        console.log("У маркері закінчилися чорнила!");
        break;
      }

      if (char !== " ") {
        if (this.inkAmount >= inkNeeded) {
          result += char;    
          this.inkAmount -= inkNeeded;
        } else {
          console.log("Не вистачає чорнил для завершення написання!");
          break;
        }
      } else {
        result += char; 
      }
    }

    console.log(`%c${result}`, `color: ${this.color}`);
  }
}


class RefillableMarker extends Marker {
  
  refill(amount) {
    this.inkAmount += amount;
    if (this.inkAmount > 100) {
      this.inkAmount = 100;
    }
    console.log(
      `Маркер заправлено! Поточний рівень чорнил: ${this.inkAmount}%`
    );
  }
}


let myMarker = new Marker("blue", 10);
myMarker.write("Hello, world!"); 

let myRefillableMarker = new RefillableMarker("green", 5);
myRefillableMarker.write("This is a refillable marker.");
myRefillableMarker.refill(50); 
myRefillableMarker.write(" Let's continue writing.");
