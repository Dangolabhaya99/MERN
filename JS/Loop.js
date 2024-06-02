// // Question 1:
// // **Q: Write a for loop that prints numbers from 1 to 5 in the console.**

// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// // Question 2:
// // **Q: Using a while loop, print even numbers from 2 to 10 (inclusive) in the
// // console.**

// let num = 2;
// while(num<=10){
//     if(num%2===0){
//         console.log(num);
//     }
//     num++;
// }

// // Question 3:
// // **Q: Write a for loop to calculate the sum of numbers from 1 to 10.**

// let sum = 0;
// for(let i=1;i<=10;i++){
//     sum += i;
// }console.log(sum);

// // Question 4:
// // **Q: Using a while loop, find the factorial of a given number (e.g., 5).**

// let factorial = 1;
// let num = 5;
// while(num>1){
//     factorial *= num;
//     num--;
// }console.log(factorial);

// // Question 5:
// // **Q: Write a for loop that prints the square of numbers from 1 to 5.**


// for(let i=1;i<=5;i++){
//     console.log(i*i);
// }

// // Question 6:
// // **Q: Using a while loop, print the cube of numbers from 1 to 5.**

// let cube = 1;
// while(cube<=5){
//     console.log(cube*cube*cube);
//     cube++;
// }

// // Question 7:
// // **Q: Write a for loop to iterate through an array of names and print each name
// // in the console.**

// let arr= ["Ram","Shyam","Laxman"]
// for(let i=0;i<=arr.length;i++){
//     console.log(arr[i]);
// }

// // Question 8:
// // **Q: Using a while loop, find the sum of elements in an array of numbers.**

// let arr=[1,2,3,4,5]
// let sum= 0;
// let i=0;
// while(i<=arr.length-1){
//     sum += arr[i];
//     i++;
// }console.log(sum);

// // Question 9:
// // **Q: Write a for loop that prints the elements of an array in reverse order.**

// let arr=[1,2,3,4,5]
// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);
// }

// // Question 10:
// // **Q: Using a while loop, find the largest number in an array of numbers.**

// let arr = [1,2,3,45,5]
// let max = arr[2]
// let i = 0;
// while(i<=arr.length-1){
//     if(arr[i]>max){
//         max = arr[i]
//     }
//     i++;
// }console.log(max);

// // Question 11:
// // **Q: Write a for loop to calculate the sum of all even numbers from 1 to 20.**

// let sum = 0;
// for(let i=0;i<=20;i+=2){
//     sum += i;   
// }console.log(sum);

// // Question 12:
// // **Q: Using a while loop, find the product of all odd numbers from 1 to 15.**

// let product = 1;
// for(let i=1;i<=15;i+=2){
//     product *=i;
// }
// console.log(product);

// // Question 13:
// // **Q: Write a for loop to print the following pattern:**

// for(let i=1;i<=5;i++){
//     let star = '';
//     for(let j=1;j<=i;j++){
//         star += "*";
//     }console.log(star);
// }

// // Question 14:
// // **Q: Using a while loop, print the numbers from 10 to 1 in descending order.**

// let num =10;
// while(num>=1){
//     console.log(num);
//     num--;
// }

// // Question 15:
// // **Q: Write a for loop to calculate the factorial of a given number (e.g., 6).**

// let factorial = 6;
// for(let i=5;i>=1;i--){
//     factorial *= i;
// }console.log(factorial);

// // Question 16:
// // **Q: Using a while loop, find the sum of digits of a given number (e.g., 123).**

// let num = 123;
// let sum = 0;
// while(num>0){
//     let digit = num%10;
//     sum += digit;
//     num = Math.floor(num/10);
// }console.log(sum);

// // Question 17:
// // **Q: Write a for loop to print the following pattern:**
// // ```
// // 55555
// // 4444
// // 333
// // 22
// // 1
// // ```

// for(let i=5;i>=1;i--){
//     let row ="";
//     for(let j=1;j<=i;j++){
//         row += i;
//     }console.log(row);
// }

// // Question 18:
// // **Q: Using a while loop, print the first 10 Fibonacci numbers.**

// let n1 = 0, n2 = 1, nextTerm;
// let count = 1;
// const numTerms = 10;

// console.log(n1); 
// console.log(n2); 
// count += 2;

// while (count <= numTerms) {
//     nextTerm = n1 + n2;
//     console.log(nextTerm);
//     n1 = n2;
//     n2 = nextTerm;
//     count++;
// }


// // Question 19:
// // **Q: Write a for loop to find and print the prime numbers between 1 and 20.**

// let prime = 1;
// for(let i=1;i<=20;i+=2){
//     prime += i;
//     console.log(i);
// }s

// // Question 20:
// // **Q: Using a while loop, reverse a given number (e.g., 12345).**

// let number=12345;
// let reverse = 0;
// while(number>0){
//     last = number%10;
//     reverse = reverse *10 +last;
//     number = Math.floor(number/10);
// }console.log(reverse);