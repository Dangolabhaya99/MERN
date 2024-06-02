// // 1. Write a JavaScript function add that takes two numbers as arguments and returns their
// // sum. Provide an example of calling this function with two numbers.

// function add(num1,num2){
//     return num1+num2;
// }
// let result = add(3,4);
// console.log(result);

// //2. Write a JavaScript function getFirstElement that takes an array as an argument and
// // returns the first element of the array. Provide an example with an array of your choice.

// function getFirstElement(array){
//     return array[0];
// }

// let arr = [1,2,3,4];
// let arrresult = getFirstElement(arr);
// console.log(arrresult);

// // 3. Define a JavaScript object person with properties name, age, and city. Write a function
// // getPersonInfo that takes this object and returns a string with the person&#39;s details in the
// // format &quot;Name: [name], Age: [age], City: [city]&quot;.

// function person(name,age,city){
//     this.name = name;
//     this.age = age;
//     this.city =city;
// }
// function getPersonInfo(personinfo){
//     return personinfo.name +""+personinfo.age +""+personinfo.city;
// }
// let person1 = new person("Abhaya",20,"Kathmandu");
// console.log(person);

// // 4. Write a JavaScript function toUpperCase that takes a string as an argument and
// // returns the string in all uppercase letters. Provide an example with a sample string.

// function UpperCase(string){
//     return string.toUpperCase();
// }
// let word = "Help";
// let resultupper = UpperCase(word);
// console.log(resultupper);

// // 5. Write a JavaScript function multiply that takes two numbers as arguments and returns
// // their product. Provide an example of calling this function with two numbers.

// function multiply(num1,num2){
//     return num1*num2;
// }
// let multiplication = multiply(2,3);
// console.log(multiplication);

// //6. Write a JavaScript function getLastElement that takes an array as an argument and
// // returns the last element of the array. Provide an example with an array of your choice.

// function getLastElement(array){
//     return array[array.length-1];
// }
// let array = [1,4,7,9];
// let result = getLastElement(array);
// console.log(result);

// // 7. Define a JavaScript object book with properties title, author, and year. Write a function
// // getBookTitle that takes this object and returns the title of the book.

// function book(title,author,year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
// function getBookTitle(object){
//     return object.title;
// }
// let obj = new book("Silly ME","unknown",1999);
// console.log(getBookTitle(obj));

// // 8. Write a JavaScript function reverseString that takes a string as an argument and
// // returns the string reversed. Provide an example with a sample string.

// function reverseString(string){
//     return string.split('').reverse().join('');
// }
// let word = "ABHAYA";
// let reversedword = reverseString(word);
// console.log(reversedword);

// // 9. Write a JavaScript function isEven that takes a number as an argument and returns
// // true if the number is even and false if it is odd. Provide an example with a sample
// // number.

// function isEven(number){
//     if(number%2==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// let num = isEven(4);
// console.log(num);

// // 10. Write a JavaScript function sumArray that takes an array of numbers as an argument
// // and returns the sum of all the numbers in the array. Provide an example with an array
// // of numbers.

// function sumArray(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let sumResult = sumArray(arr);
// console.log(sumResult);


// // 11. Define a JavaScript object car with properties make, model, and year. Write a function
// // getCarModel that takes this object and returns the model of the car.

// function getCarModel(make,model,year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }
// let car = new getCarModel("Plasticbuilt","RM-2341",1998);
// console.log(car);

// // 12. Write a JavaScript function concatenateStrings that takes two strings as arguments
// // and returns a new string that is the concatenation of the two input strings. Provide an
// // example with two sample strings.

// function concatenateStrings(string1,string2){
//     return string1.concat(string2);
// }
// let string1 = "ABCD";
// let string2 = "EFGH";
// let strresult = concatenateStrings(string1,string2);
// console.log(strresult);

// // 13. Write a JavaScript function square that takes a number as an argument and returns its
// // square. Provide an example of calling this function with a sample number.

// function square(num){
//     return (num*num);
// }
// let number = square(5);
// console.log(number);

// // 14. Write a JavaScript function findMax that takes an array of numbers as an argument
// // and returns the largest number in the array. Provide an example with an array of
// // numbers.

// function findMax(array){
//     let large = array[1];
//     let i = 1;
//     while(i<=array.length){
//         if(array[i]>=large){
//             large =array[i];
//         }
//         i++
//     }
//     return large;
// }
// let arrl = [12,3,45,67,88];
// let resultmax = findMax(arrl);
// console.log(resultmax);

// // 15. Define a JavaScript object student with properties firstName, lastName, and grade.
// // Write a function getFullName that takes this object and returns the full name of the
// // student in the format &quot;firstName lastName&quot;.

// function Student(firstName, lastName, grade) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.grade = grade;
// }
// function getFullName(student) {
//     return student.firstName + " " + student.lastName;
// }

// let student = new Student("Abhaya", "Dangol", 70);
// console.log(getFullName(student));


// // 16. Write a JavaScript function greet that takes a name as an argument and returns a
// // greeting string in the format &quot;Hello, [name]!&quot;. Provide an example of calling this
// // function with a sample name.

// function greet(name) {
//     return `Hello, ${name}!`;
// }

// let sampleName = "Abhaya";
// console.log(greet(sampleName));

// // 17. Write a JavaScript function doubleArray that takes an array of numbers as an
// // argument and returns a new array with each number doubled. Provide an example with
// // an array of numbers.

// function doubleArray(array){
//     return array.map(num => num*2);
// }
// let numarr = [1,3,4,5];
// let doublearr = doubleArray(numarr);
// console.log(doublearr);

// // 18. Define a JavaScript object movie with properties title, director, and releaseYear. Write a
// // function getMovieTitle that takes this object and returns the title of the movie.

// function Movie(title, director, releaseYear) {
//     this.title = title;
//     this.director = director;
//     this.releaseYear = releaseYear;
// }

// function getMovieTitle(movie) {
//     return movie.title;
// }

// let movinfo = new Movie("Happy Ending", "Ragnarok", 1996);
// console.log(getMovieTitle(movinfo)); 

// // 19. Write a JavaScript function getLength that takes a string as an argument and returns
// // the length of the string. Provide an example with a sample string.

// function getLength(string){
//     return string.length;
// }
// let word = "QWERTY";
// let lengthofword = getLength(word);
// console.log(lengthofword);

// // 20. Write a JavaScript function subtract that takes two numbers as arguments and returns
// // their difference. Provide an example of calling this function with two numbers.

// function subtract(num1,num2){
//     return num1-num2;
// }
// let sub = subtract(5,1);
// console.log(sub);

// // 21. Write a JavaScript function mergeArrays that takes two arrays as arguments and
// // returns a new array containing all elements from both arrays. Provide an example with
// // two arrays.

// function mergeArrays(array1,array2){
//     return [...array1, ...array2];
// }
// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];
// let mergedarr = mergeArrays(arr1,arr2);
// console.log(mergedarr);

// // 22. Define a JavaScript object recipe with properties name, ingredients (an array), and
// // servings. Write a function getIngredientList that takes this object and returns the
// // ingredients array.

// function Recipe(name, ingredients, servings) {
//     this.name = name;
//     this.ingredients = ingredients;
//     this.servings = servings;
// }

// function getIngredientList(recipe) {
//     return recipe.ingredients;
// }

// let recipeInfo = new Recipe("Chicken Curry", ["Chicken", "Curd", "Onion"], 4);
// console.log(getIngredientList(recipeInfo));

// // 23. Write a JavaScript function endsWith that takes a string and a character as arguments
// // and returns true if the string ends with the given character, otherwise false. Provide an
// // example with a sample string and character.

// function endsWith(string,character){
//     return string.endsWith(character);
// }
// let str = "yummy";
// let cha = "p";
// let result = endsWith(str,cha);
// console.log(result);

// // 24. Write a JavaScript function divide that takes two numbers as arguments and returns
// // their quotient. Provide an example of calling this function with two numbers.

// function divide(num1,num2){
//     return num1/num2;
// }
// let division = divide(6,3);
// console.log(division);

// // 25. Write a JavaScript function removeFirstElement that takes an array as an argument
// // and returns a new array with the first element removed. Provide an example with an
// // array.

// function removeFirstElement(array){
//     return array.slice(1);
// }
// let arr0 = [1,2,3,4,5];
// let resultarr = removeFirstElement(arr0);
// console.log(resultarr);

// // 26.Define a JavaScript object album with properties title, artist, and tracks (an array of
// // track names). Write a function getTrackCount that takes this object and returns the
// // number of tracks.

// function Album(title, artist, tracks) {
//     this.title = title;
//     this.artist = artist;
//     this.tracks = tracks;
// }

// function getTrackCount(album) {
//     return album.tracks.length;
// }

// let albumInfo = new Album("Blue", "Gansta", ["wened", "popo"]);
// console.log(getTrackCount(albumInfo)); 

// // 27. Write a JavaScript function startsWith that takes a string and a character as arguments
// // and returns true if the string starts with the given character, otherwise false. Provide an
// // example with a sample string and character.

// function startsWith(string,character){
//     return string.startsWith(character);
// }
// let str = "popopp";
// let cha = "d";
// let match = startsWith(str,cha);
// console.log(match);

// // 28. Write a JavaScript function isPositive that takes a number as an argument and returns
// // true if the number is positive and false if it is negative or zero. Provide an example with
// // a sample number.

// function isPositive(number){
//     if(number>=1){
//         return true;
//     }else{
//         return false;
//     }
// }
// let num = isPositive(9);
// console.log(num);

// // 29. Write a JavaScript function countElements that takes an array as an argument and
// // returns the number of elements in the array. Provide an example with an array.

// function countElements(array){
//     return array.length;
// }
// let arr = [1,2,3,4,5,56,5]
// let arrresult = countElements(arr);
// console.log(arrresult);

// // 30. Define a JavaScript object game with properties name, genre, and platforms (an array
// //     of strings). Write a function getPlatformList that takes this object and returns the
// //     platforms array.

// function game(name,genre,platforms){
//     this.name = name;
//     this.genre = genre;
//     this.platforms = platforms;
// }
// function getPlatformList(plat){
//     return plat.platforms;
// }
// let plat = new game("COC","Strategy","Tencent");
// console.log(getPlatformList(plat));