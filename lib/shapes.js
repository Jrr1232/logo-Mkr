
class Square {
    constructor(shape_color, text_color, text) {
        `
      <svg version="1.1" width="400" height="200" xmlns="http://www.w3.org/2000/svg">

      <rect x="50" width="200" height="200" style="fill:${shape_color}" />

      <text x="150" y="100" font-size="30" text-anchor="middle" fill="${text_color}">${text}</text>

    </svg>


`
    }
    setColor(userColor) {
        userColor = color;


    }

}

class Triangle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }
    setColor(userColor) {
        userColor = color;


    }

}
class Circle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }
    setColor(userColor) {
        userColor = color;


    }

}