// 1. Promises
// Create a function fetchData that simulates fetching data from an API. The function should
// return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object
// should represent a user with properties id, name, and age.

function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            const user =[
                {id:1, name:'Abhaya', age:20},
                {id:2, name:'dangol', age:21}
            ];
            resolve (user);
        },2000);
    });
} 
fetchData().then(user =>{
    console.log(user);
});

// 2. Closures
// Create a function createCounter that returns an object with two methods: increment and
// getCount. The increment method should increase the internal count by 1, and the getCount
// method should return the current count. Use a closure to maintain the internal count variable.

function createCounter(){
    let count = 0;
    return {
        increment(){
            count++;
        },

        getCount(){
            return count;
        }   
    };
}
 let  currentcount = createCounter();
 currentcount.increment();
 console.log(currentcount.getCount());
 currentcount.increment();
 console.log(currentcount.getCount());

// 3. Callbacks
// Create a function processData that accepts an array of numbers and a callback function. The
// function should process each number in the array using the callback function and return a
// new array of processed numbers.

function processData(numbers, callback) {
    const processedNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        processedNumbers.push(callback(numbers[i]));
    }
    return processedNumbers;
}
function square(num) {
    return num * num;
}
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = processData(numbers, square);
console.log(squaredNumbers);

// 4. Async/Await
// Rewrite the fetchData function from Question 1 using async and await.

function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const user = [
                {id:2, name:'dangol', age:21}
            ];
            resolve (user);
        },2000);
    });
}
async function getData(){
    const user = await fetchData();
    console.log(user);
}
getData();

// 5. Array Manipulation: Map
// Given an array of numbers, create a function that doubles each number using map.

function double(numbers) {
    return numbers.map(num => num * 2);
}
const numbers = [1, 2, 3, 4, 5];
const doublednum = double(numbers);
console.log(doublednum);

// 6. Array Manipulation: Filter
// Given an array of numbers, create a function that filters out numbers less than 10 using filter.

function filters(number){
    return number.filter(num => num<10);
}
const number = [1,2,77,56,3,20,10];
const filterless = filters(number);
console.log(filterless);

// 7. Array Manipulation: Find
// Given an array of numbers, create a function that finds the first number greater than 15 using
// find.

function findfirst(num){
    return num.find(a => a>15);
}
const num = [15,30,20,16];
const found = findfirst(num);
console.log(found);

// 8. Array Manipulation: Reduce
// Given an array of numbers, create a function that sums all numbers using reduce.

function sum(array){
    return array.reduce((add,num) => add + num,0);
}
const array  = [1,2,3,4,4];
const addarray = sum(array);
console.log(addarray);

// 9. Object Manipulation
// Given an array of user objects, write a function to transform this array into an object where the
// keys are user IDs and the values are the corresponding user objects.

function transformArrayToObject(users) {
    return users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
}
const users = [
    { id: 1, name: 'Ram', age: 25 },
    { id: 3, name: 'Shyam', age: 30 },
    { id: 2, name: 'Lakhsman', age: 35 }
];

const usersObject = transformArrayToObject(users);
console.log(usersObject);

// 10. Classes and Objects
// Create a Person class with a constructor that accepts name and age parameters. Add a
// method describe that returns a string describing the person.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `${this.name} is ${this.age} years old.`;
    }
}
const person1 = new Person('Pop', 30);
console.log(person1.describe());

// 11. Inheritance
// Create a Student class that extends Person and adds a grade property. Add a method study
// that returns a string indicating the student is studying.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        return `${this.name} is studying.`;
    }
}
const student1 = new Student('Alan', 18, 'A');
console.log(student1.describe());
console.log(student1.study());

// 12. Error Handling with Promises
// Modify the fetchData function to randomly reject the promise with an error message &quot;Failed to
// fetch data&quot;. Handle this error using .catch when calling the function.

function fetchData() {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.5) {
            reject("Failed to fetch data");
        } else {
            setTimeout(() => {
                const data = [
                    { id: 1, name: 'Alice', age: 25 },
                    { id: 2, name: 'Bob', age: 30 },
                    { id: 3, name: 'Charlie', age: 35 }
                ];
                resolve(data);
            }, 2000);
        }
    });
}
fetchData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

// 13. Error Handling with Async/Await
// Modify the fetchData function with async/await to handle errors using try/catch blocks.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("Failed to fetch data");
            } else {
                const data = [
                    { id: 1, name: 'Alice', age: 25 },
                    { id: 2, name: 'Bob', age: 30 },
                    { id: 3, name: 'Charlie', age: 35 }
                ];
                resolve(data);
            }
        }, 2000);
    });
}

async function fetchDataAsync() {
    try {
        const data = await fetchData();
        return data;
    } catch (error) {
        throw error;
    }
}

async function fetchDataWithErrorHandler() {
    try {
        const data = await fetchDataAsync();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
fetchDataWithErrorHandler();

// 14. Complex Array Manipulation
// Given an array of users, where each user has a name and an array of hobbies, create a
// function that returns an array of all unique hobbies using reduce.

function getAllUniqueHobbies(users) {
    return users.reduce((uniqueHobbies, user) => {
        const allHobbies = uniqueHobbies.concat(user.hobbies);
        return allHobbies.filter((hobby, index) => allHobbies.indexOf(hobby) === index);
    }, []);
}
const userd = [
    { name: 'Alice', hobbies: ['reading', 'painting', 'gardening'] },
    { name: 'Bob', hobbies: ['painting', 'cooking'] },
    { name: 'Charlie', hobbies: ['gardening', 'travelling', 'reading'] }
];
const uniqueHobbies = getAllUniqueHobbies(userd);
console.log(uniqueHobbies);

// Conceptual Questions
// 1. Why are promises used in JavaScript? Explain the advantages of using promises over
// traditional callback functions.
// Ans =Promises are used in JavaScript to handle asynchronous operations in a more elegant and manageable way 
// compared to traditional callback.
// 1.Improved Promises provide a more readable and linear code structure compared to nested callback 
// functions. With promises, you can chain multiple asynchronous operations together using .then() and .catch() 
// methods, which results in cleaner and more organized code.
// 2.Avoiding Callback Hell: Promises help in avoiding the "callback hell" problem, where multiple nested callback 
// functions become difficult to manage and understand. With promises, you can chain asynchronous operations 
// sequentially without nesting callbacks, leading to more maintainable code.
// 3.Error Handling: Promises provide built-in error handling using the .catch() method. Errors that occur during
// the asynchronous operation or any of its chained operations can be caught and handled in a single .catch()
// block,improving error management and debugging.
// 4.Promise Chaining: Promises allow for easy chaining of asynchronous operations using the .then() method. Each .then()
//  block in the chain receives the result of the previous operation, enabling sequential execution of asynchronous tasks.
// 5.Better Control Flow: Promises provide better control flow compared to callback functions. With promises, you can easily
//  compose asynchronous operations and control the flow of execution using methods like .then(), .catch(), 
//  and .finally().

// 2. What is a closure in JavaScript? Provide an example.
// Ans = In JavaScript, a closure is a combination of a function and the lexical environment within which that function was declared.
// This allows the function to retain access to variables and parameters from its outer scope even after the outer scope has finished executing.

// function outerFunction() {
//     let outerVariable = 'I am from outer function';
    
//     function innerFunction() {
//         console.log(outerVariable);
//     }
    
//     return innerFunction;
// }
// const innerFunc = outerFunction();
// innerFunc();

// 3. What is a callback function and why is it used in JavaScript?
// Ans = Callback functions are used in JavaScript to handle asynchronous operations and events. They are passed as
//  arguments to other functions and invoked when an operation completes or an event occurs. 
//  Callbacks enable asynchronous programming, event handling, and the creation of higher-order functions, 
//  promoting modularity, reusability, flexibility, and customization in JavaScript code.

// 4. What are async/await in JavaScript and how do they improve asynchronous
// programming?
// Ans = Async/await is a syntactic feature introduced in ES2017 (ES8) that allows for easier and more readable asynchronous 
// programming in JavaScript. The async keyword is used to define an asynchronous function, and the await keyword 
// is used to pause the execution of an asynchronous function until a promise is resolved or rejected.
// Async/await improves asynchronous programming by providing a more synchronous-looking syntax, eliminating 
// the need for callback functions or chaining .then() methods. This leads to code that is easier to read, write,
// and maintain, especially for handling multiple asynchronous operations and error handling. Async/await 
// also enables better error propagation and makes it easier to write code that follows the sequential flow of
// logic, leading to cleaner and more understandable code.

// 5. Write the difference between ES6 and JS.
// Ans =ES6, also known as ECMAScript 2015, is a specific version of the JavaScript language specification.
// JavaScript, on the other hand, is the programming language itself. Here are the key differences between ES6 
// and JavaScript:

// ES6: ES6 refers to the specific version of the ECMAScript standard released in 2015.
// It introduced significant updates and new features to the JavaScript language, including arrow functions, 
// template literals, let and const declarations, classes, destructuring assignments, and more.

// JavaScript: JavaScript is the general-purpose programming language used for creating dynamic web content and 
// client-side scripting. It is the implementation of the ECMAScript standard in web browsers and other 
// environments. JavaScript encompasses all versions of ECMAScript, including ES6, ES7, ES8, and beyond.

// 6. What are some of the major features introduced in ES6?
// Ans =ES6 (ECMAScript 2015) introduced several major features and enhancements to the JavaScript language.
// Some of the key features include:

// Arrow Functions: Arrow functions provide a concise syntax for writing function expressions.
// They have implicit return and lexical this binding.

// Block-Scoped Declarations: let and const keywords were introduced for block-scoped variable declarations,
// replacing var. const declares variables that cannot be reassigned, while let allows reassignment.

// Template Literals: Template literals allow for easier string interpolation and multiline strings,
// using backticks (`).

// Destructuring Assignment: Destructuring allows for extracting values from arrays or objects and
// assigning them to variables in a more concise and readable way.

// Default Parameters: Default parameter values can now be specified for function parameters, 
// which are used when no argument or an undefined value is provided.

// Rest Parameters and Spread Operator: Rest parameters (...) allow functions to accept an indefinite
// number of arguments as an array, while the spread operator (...) spreads iterables like arrays or strings
// into individual elements.

// Classes: ES6 introduced class syntax for creating constructor functions and defining object-oriented
// inheritance, making it easier to work with prototypes and constructors.

// Promises: Promises provide a cleaner way to work with asynchronous code, allowing for better error
// handling and chaining of asynchronous operations.

// Modules: ES6 introduced a standardized module system (import and export keywords) for organizing and
// reusing JavaScript code across files.

// Iterators and Generators: Iterators and generators provide a more efficient way to iterate over data
// structures like arrays and objects, enabling lazy evaluation and asynchronous iteration.