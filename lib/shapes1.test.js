const { Shape, Circle, Triangle, Rectangle } = require('./shapes1.js');
describe('Shape', () => {
    describe('setColor', () => {
        it('should change the color of the shape to the color entered by the User', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
        });
    })
})