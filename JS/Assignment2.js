// Password Strength Checker: Write code using if/else statements to check the
// strength of a password based on its length. Print messages like &quot;Strong password,&quot;
// &quot;Medium password,&quot; or &quot;Weak password&quot; depending on the length criteria (e.g., strong:
// &gt; 12 characters, medium: 8-12 characters, weak: less than 8 characters).
// let password = "abcdefghijklmn";
// if(password.length>=12){
//     console.log("Strong password");
// }else if(password.length<12 && password.length>=8){
//     console.log("Medium password");
// }else{
//     console.log("Weak Password");
// }

// Vowel or Consonant: Write a program using if/else to determine if a character entered
// by the user is a vowel (a, e, i, o, u) or a consonant. Consider uppercase and lowercase
// letters.
// const readline = require('readline');

// const r2 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// r2.question("Enter a character: ", (input) => {
//     const char = input.toLowerCase();

//     if (char.length !== 1 || !char.match(/[a-z]/i)) {
//         console.log("Please enter a single alphabetic character.");
//     } else {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             console.log("The character is a vowel.");
//         } else {
//             console.log("The character is a consonant.");
//         }
//     }

//     r2.close();
// });

// const readline = require('readline');

// const r3 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// Number Guessing Game: Create a simple guessing game using if/else statements.
// Generate a random number between 1 and 10 and allow the user to guess it. Print
// messages like &quot;Correct!&quot; or &quot;Guess higher/lower&quot; based on their input.
// const randomNumber = Math.floor(Math.random() * 10) + 1;

// const askGuess = () => {
//     r3.question("Guess a number between 1 and 10: ", (input) => {
//         const userGuess = parseInt(input);

//         if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
//             console.log("Please enter a valid number between 1 and 10.");
//             askGuess();
//         } else if (userGuess < randomNumber) {
//             console.log("Guess higher.");
//             askGuess();
//         } else if (userGuess > randomNumber) {
//             console.log("Guess lower.");
//             askGuess();
//         } else {
//             console.log("Correct!");
//             r3.close();
//         }
//     });
// };

// askGuess();

// Calculate Price with Tax: Write code using if/else to calculate the final price of a
// product considering a sales tax rate (e.g., 8%). Take the product price and tax rate as
// inputs and print the final price with tax.
// const readline = require('readline');

// const r4 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// r4.question("Enter the product price: ", (priceInput) => {
//     const price = parseFloat(priceInput);

//     if (isNaN(price) || price < 0) {
//         console.log("Please enter a valid positive number for the price.");
//         r4.close();
//     } else {
//         r4.question("Enter the sales tax rate (e.g., 8 for 8%): ", (taxRateInput) => {
//             const taxRate = parseFloat(taxRateInput);

//             if (isNaN(taxRate) || taxRate < 0) {
//                 console.log("Please enter a valid positive number for the tax rate.");
//             } else {
//                 const taxAmount = price * (taxRate / 100);
//                 const finalPrice = price + taxAmount;
//                 console.log(`The final price with tax is: $${finalPrice.toFixed(2)}`);
//             }

//             r4.close();
//         });
//     }
// });

// Simple Calculator: Develop a basic calculator using if/else statements. Allow the user
// to enter two numbers and an operator (+, -, *, /). Based on the operator, perform the
// calculation and print the result.
// const readline = require('readline');

// const r5 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// r5.question("Enter the first number: ", (num1Input) => {
//     const num1 = parseFloat(num1Input);

//     if (isNaN(num1)) {
//         console.log("Please enter a valid number for the first input.");
//         r5.close();
//     } else {
//         r5.question("Enter the second number: ", (num2Input) => {
//             const num2 = parseFloat(num2Input);

//             if (isNaN(num2)) {
//                 console.log("Please enter a valid number for the second input.");
//             } else {
//                 r5.question("Enter the operator (+, -, *, /): ", (operator) => {
//                     let result;
//                     switch (operator) {
//                         case '+':
//                             result = num1 + num2;
//                             break;
//                         case '-':
//                             result = num1 - num2;
//                             break;
//                         case '*':
//                             result = num1 * num2;
//                             break;
//                         case '/':
//                             if (num2 === 0) {
//                                 console.log("Error: Division by zero!");
//                                 r5.close();
//                                 return;
//                             }
//                             result = num1 / num2;
//                             break;
//                         default:
//                             console.log("Invalid operator!");
//                             r5.close();
//                             return;
//                     }
//                     console.log(`Result: ${result}`);
//                     r5.close();
//                 });
//             }
//         });
//     }
// });

// Movie Rating Recommendation: Write code using switch/case to recommend a
// movie genre based on a user&#39;s age. Use different cases for age ranges (e.g., children,
// teenagers, adults) and suggest appropriate genres (e.g., animation, action, drama).
// const readline = require('readline');

// const r6 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// r6.question("Enter your age: ", (ageInput) => {
//     const age = parseInt(ageInput);

//     switch (true) {
//         case (age < 13):
//             console.log("Recommended movie genre: Animation (for children).");
//             break;
//         case (age >= 13 && age <= 17):
//             console.log("Recommended movie genre: Action or Adventure (for teenagers).");
//             break;
//         case (age >= 18 && age <= 50):
//             console.log("Recommended movie genre: Drama or Comedy (for adults).");
//             break;
//         default:
//             console.log("Recommended movie genre: Documentary or Mystery (for mature audiences).");
//     }

//     r6.close();
// });

// Weekend or Weekday Checker: Create a program using if/else to determine if a
// given date (e.g., stored in a variable) falls on a weekend (Saturday or Sunday).
// const date = new Date(); 

// const dayOfWeek = date.getDay(2); 

// if (dayOfWeek === 1 || dayOfWeek === 7) {
//     console.log("The date falls on a weekend (Saturday or Sunday).");
// } else {
//     console.log("The date falls on a weekday.");
// }

// Positive, Zero, or Negative: Write code using if/else statements to check if a number
// is positive, zero, or negative. Print the corresponding message.
// let numbe = 5;

// if (numbe > 0) {
//     console.log("The number is positive.");
// } else if (numbe === 0) {
//     console.log("The number is zero.");
// } else {
//     console.log("The number is negative.");
// }

// Multiple of 3 or 5: Create a program using if/else to determine if a number is divisible
// by 3, 5, or both. Print a message indicating divisibility or non-divisibility.
// const number = 21; 

// if (number % 3 === 0 && number % 5 === 0) {
//     console.log("The number is divisible by both 3 and 5.");
// } else if (number % 3 === 0) {
//     console.log("The number is divisible by 3.");
// } else if (number % 5 === 0) {
//     console.log("The number is divisible by 5.");
// } else {
//     console.log("The number is not divisible by either 3 or 5.");
// }

// Even or Odd Sum: Write code using if/else to check if the sum of two user-entered
// numbers is even or odd. Print the result.
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter the first number: ", (input1) => {
//     let num1 = parseInt(input1);

//     rl.question("Enter the second number: ", (input2) => {
//         let num2 = parseInt(input2);
//         let sum = num1 + num2;

//         if (sum % 2 === 0) {
//             console.log("The sum is even.");
//         } else {
//             console.log("The sum is odd.");
//         }

//         rl.close();
//     });
// });
