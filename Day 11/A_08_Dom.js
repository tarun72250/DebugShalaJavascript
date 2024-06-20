//Dom Methods :- Dynamic changes or manipulation in some content

//1. Selecting by id 
let head = document.getElementById("head");
console.log(head);


//2. Selecting by classname
let para = document.getElementsByClassName("para-class");
console.log(para);

//3. Selecting by tagName
let paragraph = document.getElementsByTagName("p");
console.log(paragraph);

//4. Selecting with querySelectorAll() and querySelector()
let para1 = document.querySelectorAll("p");
console.log(para1);


let para2 = document.querySelector("p");
console.log(para2);


let para3 = document.querySelectorAll(".para-class");
console.log(para3);

let para4 = document.querySelector(".para-class");
console.log(para4);

//id based acces #
let para5 = document.querySelectorAll("#para1-class")
console.log(para5);

let para6 = document.querySelector("#para1-class")
console.log(para6);

