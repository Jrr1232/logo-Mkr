class Shape {
    constructor(color) {
        this.color = color;

    }
    setColor(color) {
        this.color = color
    }

}

class Circle extends Shape {

    render() {

        return `
        
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
        <circle cx="150" cy="100" r="80" fill="${this.color}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}"></text>
      
      </svg>`

    }
}
class Triangle extends Shape {

    render() {

        return `
        
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
        <polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145" fill ="${color}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}"></text>
      
      </svg>`

    }
}
class Rectangle extends Shape {

    render() {

        return `
        
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
        <rect x="10" y="10" width="30" height="30" fill ="${color}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}"></text>
      
      </svg>`

    }
}

module.exports = { Shape, Circle, Triangle, Rectangle };