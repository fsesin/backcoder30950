"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operacion_1 = require("./operacion");
const mensaje = 'Hola typescript';
let num1 = 10, num2 = 4;
console.log(`La suma de ${num1} mas ${num2} es ${(0, operacion_1.sumar)(num1, num2)}`);
console.log(`La resta de ${num1} menos ${num2} es ${(0, operacion_1.restar)(num1, num2)}`);
