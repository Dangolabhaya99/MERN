// console.log("Hello World")

// let titleElement = document.getElementById("title");
// console.log(titleElement.textContent);  

// let conentelement = document.getElementsByClassName("content");
// console.log(conentelement)

// let ListItems = document.getElementsByTagName('li');
// console.log(ListItems.length);

// content = "Hello ChatGpt"
// console.log(content);

// const paragraphElement = document.querySelectorAll('.content');
// for (let i = 0; i < paragraphElement.length; i++) {
//     paragraphElement[i].innerHTML = 'This is a <strong>modified</strong> paragraph.' 
//   }

// for(i in paragraphElement){
//     console.log(paragraphElement[i].innerHTML = "Hello DORM!")
// }

// var inputElement = document.getElementById("myInput");
// console.log(inputElement.type);  
// console.log(inputElement.value);

// inputElement.value = "New value";
// console.log(inputElement.value);

// var inputElement  = document.getElementById("myInput");
// console.log(inputElement.getAttribute("value"));

// inputElement.setAttribute("value", "New");
// console.log(inputElement.getAttribute("value"))

var elment = document.getElementById("myInput");
if(elment.hasAttribute("type")){
    console.log("A");
}else{
    console.log("N");
}