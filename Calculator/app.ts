import inquirer from "inquirer";
import chalk from "chalk";

console.log("           "+chalk.inverse.bold("Calculator"));

let choice={
    choice:'Y'
};
while(choice.choice=='y'|| choice.choice=='Y'){

    let number1 = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "Enter fisrt number: "}
    ]);

    let number2 = await inquirer.prompt([{
        name: "num2",
        type: "number",
        message: "Enter second number: "}
    ]);

    console.log(chalk.white.bgMagenta.bold("Which Operation you want to perform?"));
    console.log("Press 1 for Addition");
    console.log("Press 2 for Subtraction");
    console.log("Press 3 for Multiplication");
    console.log("Press 4 for Division");

    let options = await inquirer.prompt([{
        name: "option",
        type: "number"}
    ]);

    if(options.option==1){
        console.log("Sum of "+number1.num1+" and "+number2.num2+" is: "+(number1.num1+number2.num2));
    }else if(options.option==2){
        console.log("Subtraction of "+number1.num1+" and "+number2.num2+" is: "+(number1.num1-number2.num2));
    }else if(options.option==3){
        console.log("Product of "+number1.num1+" and "+number2.num2+" is: "+(number1.num1*number2.num2));
    }else if(options.option==4){
        console.log(number1.num1+" Divided by "+number2.num2+" is: "+(number1.num1/number2.num2));
    }else{
        console.log(chalk.red.bold("Invalid Option"));
    }


    choice = await inquirer.prompt([{
        name: "choice",
        message: "Do Want to perform an other operation press Y for Yes and N for No : "}
    ]);
}


