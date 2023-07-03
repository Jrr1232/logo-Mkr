
const { Shape, Circle, Triangle, Rectangle } = require('./shapes1.js');


generateSVG = (data) => {
  if (data.shape == 'circle') {


    const shape = new Circle(data.shape_color, data.text_color, data.text);
    shape.setColor(data.shape_color, data.text_color);
    return shape.render();

  }

  if (data.shape == 'triangle') {


    const shape = new Triangle(data.shape_color, data.text_color, data.text);
    shape.setColor(data.shape_color, data.text_color);
    return shape.render();

  }
  if (data.shape == 'square') {

    const shape = new Rectangle(data.shape_color, data.text_color, data.text);
    shape.setColor(data.shape_color, data.text_color);
    return shape.render();

  }
}
module.exports = { generateSVG };

