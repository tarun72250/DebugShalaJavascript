//Property :- we can get and set some values.

//1. tagName :- return tag for any element node.

let buttonEle = document.querySelector("p");
//console.log(buttonEle);

//2. innerText :- return the text content of the element and all its children.

let div = document.querySelector("div");
//console.dir(div);

//3. innerHTML :- return the all nested tags inside the element and all its children 

let ul = document.querySelector("ul");
//console.dir(ul);



// let h1 = document.querySelector("h1");
// console.dir(h1);


//4. textContent :- return the textual content even for hidden elements.

let h1 = document.querySelector("h1");
//console.log(h1);

//let div1 = document.getElementsByClassName("class-box");
let div1 = document.querySelectorAll(".class-box");
// div1[0].innerText = " new";
// div1[1].innerText = " new";
// div1[2].innerText = " new";

let no =1;
for(div of div1)
{
       div.innerText += no;
       no++;
}