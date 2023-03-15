#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Shebang line, tells OS to use node interpreter.
const figlet_1 = __importDefault(require("figlet"));
const commander_1 = require("commander");
const basic_calculator_1 = require("@gdenisvueling/basic-calculator");
const program = new commander_1.Command();
const calculator = new basic_calculator_1.Calculator();
function takeTwo(value, dummyPrevious) {
    return value.split(",");
}
function toIntArray(array) {
    const stringArray = array[0].split(" ");
    const result = [parseInt(stringArray[0], 10), parseInt(stringArray[1], 10)];
    return result;
}
program
    .version("1.0.0")
    .name('calculator')
    .description("Calculator project for vueling")
    .option("-a, --addition <value1>", "Add two numbers", takeTwo, [])
    .option("-s, --substraction <value1>", "Substract two numbers", takeTwo, [])
    .option("-m, --multiplication <value1>", "Multiplicate two numbers", takeTwo, [])
    .option("-d, --division <value1>", "Divide two numbers", takeTwo, []);
program.parse(process.argv);
const options = program.opts();
function addition(first, second) {
    return calculator.addition(first, second);
}
function substraction(first, second) {
    return calculator.substraction(first, second);
}
function multiplication(first, second) {
    return calculator.multiplication(first, second);
}
function division(first, second) {
    return calculator.division(first, second);
}
if (options.substraction.length > 0) {
    const values = toIntArray(options.substraction);
    console.log(substraction(values[0], values[1]));
}
if (options.addition.length > 0) {
    const values = toIntArray(options.addition);
    console.log(addition(values[0], values[1]));
}
if (options.multiplication.length > 0) {
    const values = toIntArray(options.multiplication);
    console.log(multiplication(values[0], values[1]));
}
if (options.division.length > 0) {
    const values = toIntArray(options.division);
    console.log(division(values[0], values[1]));
}
if (!process.argv.slice(2).length) {
    console.log(figlet_1.default.textSync("Calculator"));
    program.outputHelp();
}
