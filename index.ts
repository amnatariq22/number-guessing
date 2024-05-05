#! /usr/bin/env node

import inquirer from "inquirer";


const randomNumber = Math.floor(Math.random() * 6 + 1);

console.log ("welcome to number Guessing Game");
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber" ,
        type: "number",
        message: "please guessed a number between 1-6:",
    },
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("congtratulations! you guessed right number.")
}else{
    console.log("You guessed wrong number");
}
