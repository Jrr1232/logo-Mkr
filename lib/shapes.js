class shape {
    constructor(shape, text, shapecolor, textcolor) {
        this.shape = shape;
        this.text = text;
        this.shapecolor = shapecolor;
        this.textcolor = textcolor;
    }


    setShape(shape, text) {
        return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <${shape} cx="150" cy="100" r="80" fill="" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="">${text}</text>
  
  </svg>
  
  `

    }

    setColor(shapecolor, textcolor) {

    }


}

class triangle {
    constructor() {

    }
}





