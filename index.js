//Include Packages
const fs = require("fs");
const inquirer = require('inquirer');
const generator = require("./lib/generateSVG.js");


function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter desired text',
            name: 'text',
            validate: (text) => {
                if (!text.length) {
                    return 'Please provide 3 characters'
                }
                if (text.length > 3) {
                    return 'Please provide less than 3 characters'
                }
                return true;

            }
        },
        {
            type: 'input',
            message: "Please enter desired text color (keyword/ OR hexadecimal number)",
            name: 'text_color'
        },
        {
            type: 'checkbox',
            message: "Select a shape",
            choices: ["circle", "triangle", "square"],
            name: 'shape'
        }, {
            type: 'input',
            message: "Please enter desired shape color (keyword/ OR hexadecimal number)",
            name: 'shape_color'
        },
    ]).then((data) => {
        // Function to turn choices into an array that will be listed 


        // Function to insert UserData into HTML
        // markdown.generateMarkdown(data.title, data.description, data.motivation)
        fs.writeFile("logo.svg", generator.generateSVG(data), (err) => {
            if (err)
                console.log(err);
            else {
                console.log('Generated logo.svg')
            }
        })





    })

}
init()