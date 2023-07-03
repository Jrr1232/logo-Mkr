class shape {
    constructor(shape, text, shapecolor, textcolor) {
        this.shape = shape;
        this.text = text;
        this.shapecolor = shapecolor;
        this.textcolor = textcolor;
    }

    render() {
        return `
          <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.shapecolor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
          </svg>
        `
    }

    setShape(shapetype, text) {
        return `
          <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <${shapetype} cx="150" cy="100" r="80" fill="${this.shapecolor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${text}</text>
          </svg>
        `
    }


    setColor(shapecolor, textcolor) {
        return `
          <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${shapecolor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${this.text}</text>
          </svg>
        `
    }


}
class triangle extends shape {
    render() {
        return this.setShape(this.shape, this.text).setColor(this.shapecolor, this.textcolor);
    }
}

