//Default Values in Methods

// Q1 Create a method called addNumbers. The function should take 2 numbers as its parameters and 
//return the sum of those numbers. Both parameters should default to 0 if they are not provided.

// function addNumber(num1 = 0, num2 = 0) {
// return num1 + num2;
// }
const addNumber = (num1 = 0, num2 = 0) => num1 + num2;
console.log(addNumber(5,10)); //Output: 15

// Q2 Create a method called sayHello with 2 parameters, name and greeting. The function should log 
//the greeting followed by the name. The greeting parameter should default to "Hello".

// function sayHello(name, greeting = "Hello"){
//     console.log(`${greeting} ${name}`)
// }
const sayHello = (name, greeting = "Hello") => console.log(`${greeting} ${name}`)
sayHello("Annette") //Output: Hello Annette
sayHello("Annette", "Good Day") //Output: Good Day Annette
