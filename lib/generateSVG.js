

generateSVG = (data) => {
  if (data.shape == 'circle') {

    const circle =
      `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
  <circle cx="150" cy="100" r="80" fill=${data.shape_color.toLowerCase()} />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text_color}">${data.text}</text>

</svg>

`
    return circle;
  }

  if (data.shape == 'triangle') {
    const triangle =
      `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
  <polygon points = "250,60 100,400 400,400" style ="fill:${data.shape_color.toLowerCase()}"/>

  <text x="200" y ="150"font-size="30" text-anchor="middle" fill="${data.text_color}">${data.text}</text>

</svg>

`
    return triangle;

  }
  if (data.shape == 'square') {
    const square =
      `
      <svg version="1.1" width="400" height="200" xmlns="http://www.w3.org/2000/svg">

      <rect x="50" width="200" height="200" style="fill:${data.shape_color}" />
      
      <text x="150" y="100" font-size="30" text-anchor="middle" fill="${data.text_color}">${data.text}</text>
    </svg>

`
    return square;

  }
}
module.exports = { generateSVG };
