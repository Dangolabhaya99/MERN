// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// let john = new Person("john",21);
// console.log(john);

// function outerFunction(){
//     let outvar = "I am outisde!";
    
//     function innerFunction(){
//         console.log(outvar);
//     }
//     return innerFunction;
// }

// function add(a,b, printResult){
//     printResult();
//     console.log('\n');
//     return a+b;

// }
// let result = add(2,3, printResult);
// console.log(result);
// function printResult(){
//     console.log("the result is printed below:");
// }

// function add(a,b,sub){
//     console.log(sub(4,5))
//     return a+b;
// }
// let result = add(2,3,sub);
// console.log(result);
// function sub(a,b){
//     return a-b;
// }

// let promise = new Promise((resolve, reject) =>{
//     let success = true;
//     if(success){
//         resolve("Promise resolved!");
//     }else{
//     reject("Promiserejected.")}
//     }
// );
// promise.then((message) =>{
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// });

// let subtract =new Promise((resolve,reject) =>{
//     let a =5;
//     let b = 10;
//     let result = a-b;
//     if(result<5){
//         resolve("small");
//     }
//     else{
//         reject("large");
//     }
// });

// subtract.then((message) =>{
//     console.log(message);
// }).catch((error)=>{
//     console.error(error);});

// function fetchData(){
//     return new Promise((resolve) =>{
//         setTimeout(()=>{
//             resolve("data Fetched!");
//         },10000);
//     });
// }

// async function getData(){
//     const data = await fetchData();
//     console.log(data);
// }

// getData();

// const numbers=[10,20,30,40,50];
// const foundnumber = numbers.find((num) => num >30);
// console.log(foundnumber);

// const filteredNumbers =numbers.filter(num => num >30);
// console.log(filteredNumbers);

// const squaredNumbers =numbers.map(num => num*num);
// console.log(squaredNumbers);

// const arr = [1,2,3]
// const newArr = [5,6,arr[0],arr[1],arr[2]];
// console.log("New array (before spread operator):",newArr);

// const array1 = [1,2,3];
// const array2 = [4,5,6];
// const combination = [...array1,...array2];
// console.log(combination);

// const obj1 = {a:1, b:2};
// const obj2 = {c:3, d:4};
// const mergedObj = {...obj1,...obj2};
// console.log(mergedObj);

// const arr = [1,2,3,4,5]
// // const first = arr[0];
// // const rest = arr.slice(1);
// // console.log(first);
// // console.log(rest);

// const[a,b,...rest] =arr;
// console.log(a)
// console.log(b)
// console.log(rest)

// function add(...numbers){
//     return numbers.reduce((sum, num) => sum + num, 0);
// }
// console.log(add(1,2,3,4));

const arr = []