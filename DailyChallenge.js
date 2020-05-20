// Daily Challenge

//Go through the work for the Array Extension questions from Week 1 Day 4 and convert all the 
//callback functions to arrow functions. 

let pets = [
    {
        name: "Rex",
        age: 4,
        ownerName: "Luke"
    }, {
        name: "Spot",
        age: 7,
        ownerName: "Jade"
    }, {
        name: "Scooby",
        age: 3,
        ownerName: "Shaggy"
    }, {
        name: "Lucky",
        age: 1,
        ownerName: "Luke"
    }, {
        name: "Sadie",
        age: 3,
        ownerName: "Daniel"
    }, {
        name: "Duke",
        age: 5,
        ownerName: "Sabine"
    }
];

// Q1 Use the Array.filter function to create an array of all the pets owned by Luke.

// function ownedByLuke(pet) {
//     return pet.ownerName == "Luke";
// }
// let lukesPets = pets.filter(ownedByLuke);
// console.log(lukesPets);

const ownedByLuke = (pet) => pet.ownerName == "Luke";
let lukesPets = pets.filter(ownedByLuke);
console.log(lukesPets); 
//Output:
// [
//     { name: 'Rex', age: 4, ownerName: 'Luke' },
//     { name: 'Lucky', age: 1, ownerName: 'Luke' }
// ]

// Q2 Use the Array.map function to create an array of all the names of the owners.

// function getOwner(pet){
//     return pet.ownerName;
// }
// let owners = pets.map(getOwner);
// console.log(owners);

const getOwner = (pet) => pet.ownerName;
let owners = pets.map(getOwner);
console.log(owners); //Output: [ 'Luke', 'Jade', 'Shaggy', 'Luke', 'Daniel', 'Sabine' ]

// Q3 Use the Array.find function to retrieve the pet owned by Shaggy
// function findShaggysPet(pet) {
//     return pet.ownerName == "Shaggy";
// }
// let shaggysPet = pets.find(findShaggysPet);
// console.log(shaggysPet);

const findShaggysPet = (pet) => pet.ownerName == "Shaggy";
let shaggysPet = pets.find(findShaggysPet);
console.log(shaggysPet); //Output: { name: 'Scooby', age: 3, ownerName: 'Shaggy' }

// Q4 Use the Array.filter function to create an array of all the pets that are less than 5 years old
// and that have either a pet or owner name that starts with "S"

// function filterCallback(pet){
//     let lessThan5 = pet.age < 5;
//     let hasS = pet.name[0] == "S" || pet.ownerName[0] == "S";
//     return lessThan5 && hasS;
// }
// let filteredPets = pets.filter(filterCallback);
// console.log(filteredPets);

// const filterCallback = (pet)=> {
//     let lessThan5 = pet.age < 5;
//     let hasS = pet.name[0] == "S" || pet.ownerName[0] == "S";
//     return lessThan5 && hasS;
// }
// let filteredPets = pets.filter(filterCallback);
// console.log(filteredPets);

let filteredPets = pets
    .filter(pet => pet.age < 5)
    .filter(pet => pet.name[0] == "S" || pet.ownerName[0] == "S");
console.log(filteredPets);
// Output:
// [
//     { name: 'Scooby', age: 3, ownerName: 'Shaggy' },
//     { name: 'Sadie', age: 3, ownerName: 'Daniel' }
// ]

//Do the same for all the String Extension Method Questions from Week 1 Day 5

let sentence = "The quick brown fox jumps over the lazy dog.";

// Q1 Write function that searches for a string inside the sentence above. 
// The function should return true if the string is found or false otherwise
// function searchInSentence(searchTerm) {
//     return sentence.includes(searchTerm);
// }
// console.log(searchInSentence("dog"));
// console.log(searchInSentence("program"));

const searchInSentence = (searchTerm) => sentence.includes(searchTerm);
console.log(searchInSentence("dog")); // Output: True as dog is in the sentence
console.log(searchInSentence("program")); //Output: False as program is not in the sentence

// Q2 Write function that searches for a string inside the sentence above. The function should return 
// the index of the first occurrence of the string if the string is found or -1 otherwise
// function findIndexInSentence(searchTerm) {
//     return sentence.indexOf(searchTerm);
// }
// console.log(findIndexInSentence("dog"));
// console.log(findIndexInSentence("program"));

const findIndexInSentence = (searchTerm) => sentence.indexOf(searchTerm);
console.log(findIndexInSentence("dog")); //Output: 40
console.log(findIndexInSentence("program")); // Output: -1

// Q3 Write a function that takes a string and returns the first three characters of that string
// function firstThreeChars(myString) {
//     return myString.substring(0, 3);
// }
// console.log(firstThreeChars(sentence));

const firstThreeChars = (myString) => myString.substring(0, 3);
console.log(firstThreeChars(sentence));

// Q4 Write a function that takes a string and returns the last two characters of that string
// function lastTwoChars(myString) {
//     return myString.substring(myString.length - 2);
// }
// console.log(lastTwoChars(sentence)); // Outputs "g."
// console.log(lastTwoChars("Luke")); // Outputs "ke"

const lastTwoChars = (myString) => myString.substring(myString.length - 2);
console.log(lastTwoChars(sentence)); //Output: "g."
console.log(lastTwoChars("Luke")); //Output: "ke"

// Q5 Write a function that converts a string into an array of words where a word is any string 
//separated by a space.
// function stringToArray(myString) {
//     return myString.split(" ");
// }
// console.log(stringToArray(sentence));

const stringToArray = (myString) => myString.split(" ");
console.log(stringToArray(sentence));
//Output: [
//   'The',   'quick',
//   'brown', 'fox',
//   'jumps', 'over',
//   'the',   'lazy',
//   'dog.'
// ]
// Q6 Write a function that counts the number of times a string appears inside the sentence string above
// function countOccurrences(searchTerm) {
//     let count = 0;
//     let startIndex = 0;
//     while (true) {
//         let index = sentence.indexOf(searchTerm, startIndex);
//         if (index == -1) {
//             break;
//         }
//         count++;
//         startIndex = index + 1;
//     }
//     return count;
// }
// console.log(countOccurrences("the"));

const countOccurrences = (searchTerm) => {
    let count = 0;
    let startIndex = 0;
    while (true) {
        let index = sentence.indexOf(searchTerm, startIndex);
        if (index == -1) {
            break;
        }
        count++;
        startIndex = index + 1;
    }
    return count;
}
console.log(countOccurrences("e")); // Output: 3


