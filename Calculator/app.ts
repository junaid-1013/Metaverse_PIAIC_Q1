import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import { sum, sub, mul, div } from "./operations.js";

const welCome = async () => {
    console.log(figlet.textSync("Calculator"));
    let choice = {
        choice: 'Yes'
    };

    while (choice.choice == 'Yes') {

        let input = await inquirer.prompt([{
            name: "num1",
            type: "number",
            message: "Enter fisrt number: "
        },
        {
            name: "num2",
            type: "number",
            message: "Enter second number: "
        },
        {
            name: "option",
            type: "list",
            message: "Select Your Operations",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        }
        ]);

        if (input.option == "Addition") {
            console.log("Sum of " + input.num1 + " and " + input.num2 + " is: " + sum(input.num1, input.num2));
        } else if (input.option == "Subtraction") {
            console.log("Subtraction of " + input.num1 + " and " + input.num2 + " is: " + sub(input.num1, input.num2));
        } else if (input.option == "Multiplication") {
            console.log("Product of " + input.num1 + " and " + input.num2 + " is: " + mul(input.num1, input.num2));
        } else if (input.option == "Division") {
            console.log(input.num1 + " Divided by " + input.num2 + " is: " + div(input.num1, input.num2));
        } else {
            console.log(chalk.red.bold("Invalid Option"));
        }


        choice = await inquirer.prompt([{
            name: "choice",
            type: "list",
            message: "Do Want to perform an other operation",
            choices: ["Yes", "No"]
        }
        ]);
    }
};

await welCome();

