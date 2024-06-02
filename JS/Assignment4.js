// // 1. Write a function that takes two parameters and returns their sum.
// function sum(num1,num2){
//     return num1+num2;
// }console.log(sum(6,9));

// // 2. Create a function that calculates the average of an array of numbers.
// let arr = [1,2,3,4,5]
// function ave(total, noofelements){
//     return total/noofelements;   
// }
// let total = 0;
// for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
// }
// console.log(ave(total,arr.length));

// //3. Write a function that checks if a given number is even or odd.
// function check(num){
//     if(num%2==0){
//         console.log(`${num} is an even number.`)
//     }
//     else{
//         console.log(`${num} is an odd number.`)
//     }
// }check(3);

// //4. Create a function that reverses a string.
// function rev(word){
//     let reverseword='';
//     for(let i=word.length-1;i>=0;i--){
//         reverseword += word[i];
//     }
//     return reverseword;
// }
// console.log(rev("ABCD"));

// //5. Write a function that finds the maximum value in an array of numbers.

// function maxi(array){
//     let max = array[0];
//     let i=0;
//     while(i<=array.length-1){
//     if(array[i]>max){
//         max =array[i];
//     }i++
//     }return max;
// }
// array = [1,67,89,23,45]
// console.log(maxi(array));

// //6. Create a function that converts Celsius to Fahrenheit.
// function converter(Celsius){
//     let Fahrenheit=(Celsius*9/5)+32;
//     return Fahrenheit;
// }
// Celsius = 39;
// Fahrenheit = converter(Celsius);
// console.log(`${Celsius} degrees Celsius is equal to ${Fahrenheit} degrees Fahrenheit.`);

// //7. Write a function that generates a random number between a given minimum and maximum.
// function rand(minimum,maximum){
//     let randomnumber = Math.floor(Math.random()*maximum)+ minimum;
//     return randomnumber;
// }
// minimum =1;
// maximum = 10;
// randomnumber = rand(minimum,maximum)
// console.log(`Random number between ${minimum} and ${maximum} is ${randomnumber}`);

// //8. Create a function that checks if a string is a palindrome.
// function palindrome(word) {
//     let reverseword = '';
//     for (let i = word.length - 1; i >= 0; i--) {
//         reverseword += word[i];
//     }
//     return word === reverseword;
// }

// let word = "SOS";
// if (palindrome(word)) {
//     console.log(`${word} is a palindrome.`);
// } else {
//     console.log(`${word} is not a palindrome.`);
// }

// //9. Write a function that capitalizes the first letter of each word in a sentence.
// function capital(word) {
//     return word[0].toUpperCase() + word.slice(1);
// }

// console.log(capital("abhaya")); 

// //10. Create a function that returns the factorial of a given number.
// function factorial(num) {
//     let i = num - 1;
//     while (i >= 1) {
//         num *= i;
//         i--;
//     }
//     return num; 
// }
// let num = 5;
// console.log(factorial(num)); 

// //11. Write a function that counts the number of occurrences of a specific element in an array.
// function occurence(array,elements){
//     let count =0;
//     for(let i=0;i<array.length;i++){
//         if(array[i]===elements){
//             count++;
//         }
//     }return count;
// }
// let array =[1,2,3,5,5,5,5,6,7,6,5]
// let elements =5;
// console.log(`Occurence of the element ${elements} is ${occurence(array,elements)}.`);

// //12. Create a function that checks if a given year is a leap year.
// function leap(year){
//     if(year%4==0&&year%100 !==0){
//         console.log(`${year} is Leap year`)
//      }else{
//         console.log(`${year} is not Leap year`);
//     }
// }leap(2024);

// //13. Write a function that merges two arrays and returns the sorted result.
// function merge(array1,array2){
//     let mergearray = array1.concat(array2);
//     mergearray.sort((a,b) => a-b);
//     return mergearray;
// }
// array1 = [1,3,5,7]
// array2 = [2,4,6,8]
// console.log(`After merging and sorting ${array1} and ${array2} , we get ${merge(array1,array2)}.`)

// //14. Create a function that converts a number to its Roman numeral representation.

// function convertToRoman(num) {
//  const mappingTable = {
//     M:1000,
//     CM:900,
//     D:500,
//     CD:400,
//     C:100,
//     XC:90,
//     L:50,
//     XL:40,
//     X:10,
//     IX:9,
//     V:5,
//     IV:4,
//     I:1
//   };

//    var romanized = "";
//    for(const key in mappingTable){
//      const numberValue = mappingTable[key];
//      while(numberValue <= num){
//        num-=numberValue;
//        romanized+=key;
//      }
//    }
//    return romanized;
// }
// var result=convertToRoman(891);
// console.log(result);

// //15. Write a function that finds the second smallest element in an array of numbers.
// function smallest(array){  
//     let firstsmall =array[0];
//     let secondsmall =array[0];

//     for(let i=0;i<=array.length;i++){
//         if(array[i]<firstsmall){
//             secondsmall =firstsmall;
//             firstsmall = array[i];
//         }else if(array[i]<secondsmall && firstsmall<array[i]){
//             secondsmall = array[i];
//         }
//     }return secondsmall;
// }
// array =[1,3,9,8]
// console.log(smallest(array));

// //16. Create a function that calculates the area of a circle given its radius.
// function area(radius){
//     let formula =Math.PI*(radius*radius);
//     return formula;
// }
// radius = 2;
// console.log(`Area of a circle with ${radius} is ${area(radius)}.`);

// //17. Write a function that truncates a string if it exceeds a specified length and appends "...."; to
// // the end.
// function truncate(string, limit){
//     if(string.length>limit){
//         return string.substr(0,limit)+'.....';
//     }else {
//         return string;
//     }
// }
// string="My Name is Abhaya Dangol and i need money."
// limit=10;
// console.log(`truncated string ${truncate(string,limit)}`);

// //18. Create a function that checks if a given string contains only digits.
// function tocheckdigit(string){
//     return /^\d+$/.test(string);
// }
// console.log(tocheckdigit("123"));
// console.log(tocheckdigit("A12"));

// //19. Write a function that removes all falsy values (false, null, 0," ", undefined, and NaN) from
// // an array.
// function removeFalsyValues(array) {
//     return array.filter(value => !!value);
// }

// let array = [false, null, 0, "", undefined, NaN, "hello", 123, true];
// console.log(removeFalsyValues(array));

// //20. Create a function that generates a new array with unique values from a given array.
// function uniqueArray(array) {
//     return array.filter((value, index) => array.indexOf(value) === index);
// }
// let array = [1, 2, 2, 3, 4, 4, 5];
// console.log(uniqueArray(array));
