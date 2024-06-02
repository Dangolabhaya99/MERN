//Create two variables, one for your name and another for your age. Print a sentence combining those variables.
var fullname = "Abhaya Dangol";
var age = 20;
console.log(`My name is ${fullname} and I am ${age} years old.`);

//Assign the value 10 to a variable. Then multiply that variable by itself and store the result in another variable. Print the final value.
var num = 10;
var store = num*num;
console.log(store);

// Write code to check if the character stored in a variable is uppercase or lowercase.
// Print "uppercase" or "lowercase" accordingly.
var char = "A";

if(char ==char.toUpperCase()){
    console.log("Uppercase");
}
else if(char ==char.toLowerCase()){
    console.log("Lowercase");
}

// Declare two variables with numeric values. Add them together and print the sum. Then,
// subtract the smaller number from the larger number and store the difference in a new
// variable. Print the difference.

var num1 = 10;
var num2 = 9;
var add = num1 + num2;
console.log(add);
var sub = num1-num2;
console.log(sub);

// Imagine you have a variable storing a product price. Write code to apply a 10%
// discount and print the discounted price.
var price = 1200;
var discount = price-(price * 10/100);
console.log(`The price after discount ${discount}.`);