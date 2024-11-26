import chalk from "chalk"
import validator from "validator"

// console.log(chalk.blue("Hello World!"))

// console.log(chalk.bgGreen("Hello World!"))

// console.log(chalk.bgBlueBright("Hello World!"))

let result = validator.isEmail("asad@gmail.com")
console.log( result ? chalk.green.inverse(result) : chalk.red.inverse(result))