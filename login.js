let user = document.querySelector(".input");  // Selecting the input field
let password = document.querySelector(".password");
const btn = document.querySelector("button");  // Selecting the password field  // Selecting the button
let msg = document.querySelector(".msg");  // Selecting the message display area

const check = () => {
    if (user.value === "admin") {
        if (password.value === "admin") {
            msg.innerText = "Login Successful!";
            msg.style.color = "green";  
            console.log("correct");
            window.location.href = "index.html"; 
            
        } else {
            msg.innerText = "Incorrect Password";
            msg.style.color = "red";
            console.log("incorrect password");
        }
    } else {
        msg.innerText = "Incorrect Username or Password";
        msg.style.color = "red";
    }
    user.value = "";
    password.value = "";
};

document.addEventListener('DOMContentLoaded', function() {
        btn.addEventListener('click', () => {
            check();
        });
});
