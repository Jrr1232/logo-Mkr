class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;

    }
    setColor(shapeColor, textColor) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;

    }

}

class Circle extends Shape {

    render() {
        console.log(this.text)

        return `
        
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}
class Triangle extends Shape {

    render() {

        return `
        
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
        <polyline points="150, 18 244, 182 56, 182" fill ="${this.shapeColor}"/>
      
        <text x="150" y="185" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`

    }
}
class Rectangle extends Shape {

    render() {

        return `
        
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
        <rect x="10" y="10" width="250" height="250" fill ="${this.shapeColor}"/>
      
        <text x="130" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`

    }
}

module.exports = { Shape, Circle, Triangle, Rectangle };