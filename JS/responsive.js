// document.addEventListener('DOMContentLoaded',function(){
//     const navLinks = document.getElementById('navLinks');
//     const menuToggle = document.getElementById('hamburger');

//     menuToggle.addEventListener('click',toggleMenu);

//     function toggleMenu(){
//         navLinks.classList.toggle('show');
//     }
// });

const fullname = document.getElementById("username");
const email =document.getElementById("email");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const message =document.getElementById("message");

const btn = document.getElementById("btn");
btn.addEventListener("submit",function(event){
    event.preventDefault();
    alert(fullname.value);
    console.log(email.value);
    console.log(address.value);
    console.log(phone.value);
    console.log(message.value);
})
// let username = document.getElementById("username");
// let email = document.getElementById("email");
// let password = document.getElementById("password");

// function validateForm() {
//     let valid = true;
    
//     if (username.value == "") {
//         document.getElementById("userError").innerHTML = "Username is empty";
//         valid = false;
//     } else if (username.value.length < 3) {
//         document.getElementById("userError").innerHTML = "Username requires at least 3 characters";
//         valid = false;
//     } else {
//         document.getElementById("userError").innerHTML = "";
//     }
    
//     if (email.value == "") {
//         document.getElementById("emailError").innerHTML = "Email is empty";
//         valid = false;
//     } else {
//         document.getElementById("emailError").innerHTML = "";
//     }
    
//     if (password.value == "") {
//         document.getElementById("passError").innerHTML = "Password field is empty";
//         valid = false;
//     } else if (password.value.length < 8) {
//         document.getElementById("passError").innerHTML = "Password needs more than 8 characters";
//         valid = false;
//     } else {
//         document.getElementById("passError").innerHTML = "";
//     }
    
//     return valid;
// }