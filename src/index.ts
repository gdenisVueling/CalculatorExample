#!/usr/bin/env node
//Shebang line, tells OS to use node interpreter.
import figlet from "figlet";
import { Command, CommanderError } from "commander";
import { Calculator } from "@gdenisvueling/basic-calculator";

const program = new Command();

const calculator: Calculator = new Calculator();

function takeTwo(value: any, dummyPrevious: any) {
  return value.split(",");
}

function toIntArray(array: string[]) {
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
  .option(
    "-m, --multiplication <value1>",
    "Multiplicate two numbers",
    takeTwo,
    []
  )
  .option("-d, --division <value1>", "Divide two numbers", takeTwo, []);

program.parse(process.argv);

const options = program.opts();

function addition(first: number, second: number) {
  return calculator.addition(first, second);
}

function substraction(first: number, second: number) {
  return calculator.substraction(first, second);
}

function multiplication(first: number, second: number) {
  return calculator.multiplication(first, second);
}

function division(first: number, second: number) {
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
  console.log(figlet.textSync("Calculator"));
  program.outputHelp();
}
