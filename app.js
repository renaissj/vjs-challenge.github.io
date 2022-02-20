const loginForm = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//4.2const loginbutton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//     //4.1console.log("hello " + logininput.value);
//     const username = logininput.value;
//     /* 4.1
//     if (username === "") {
//         alert("Please input your name");
//     } else if (username.length > 15) {
//         alert("Your name is too long.");
//     } 4.1*/
//     console.log(username);
// }

//4.2 loginbutton.addEventListener("click", onLoginBtnClick);

//4.4 const link = document.querySelector("a");
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();
    // const username = logininput.value;
    // console.log(username);
    //4.4console.log(logininput.value);
    const username = logininput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //greeting.innerText = "Hello " + username;
    /*4.6
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);*/
    paintGreetings(username);
}

/*4.3 function handleLinkClick(event) {
     event.preventDefault();
     console.dir(event);
 }*/

loginForm.addEventListener("submit", onLoginSubmit);
//4.3 link.addEventListener("click", handleLinkClick);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    /*4.6
    greeting.innerText = `Hello ${savedUserName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);*/
    paintGreetings(savedUserName);
}