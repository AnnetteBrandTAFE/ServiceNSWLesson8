// Throwing and Handling Exceptions

// Q1 Create a function called divide that takes 2 numbers as parameters. 
//The function should divide the first number by the second number and return the result. 
//If the second number is a 0, the function should throw an Error object.

// function divideNumber(num1, num2){
//     if(num2 == 0){
//         throw "ERROR: num2 can't be a 0";
//      } else {
//         return num1 / num2;
//         }
// }
// console.log(divideNumber(100,10)); // Output: 10
// console.log(divideNumber(100,0)); //Output: throw "ERROR: num2 can't be a 0";

const divideNumber = (num1, num2) => {
    if(num2 == 0){
        throw new Error("ERROR: num2 can't be a 0");
     } else {
        return num1 / num2;
        }
}
console.log(divideNumber(100,10)); // Output: 10
//console.log(divideNumber(100,0)); //Output: throw "ERROR: num2 can't be a 0";

// Q2 Call the above function inside a try/catch block. 
//You should log the exception message and then continue with the program.

try {
    console.log(divideNumber(10, 0));
} catch (e) {
    console.log(e.message);
}