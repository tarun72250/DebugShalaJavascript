//1.
let b = document.body;
console.log("First child of body is :-" , b.firstChild);
console.log("First elementChild of body is :-",b.firstElementChild);


//3.
const changeColor=() =>{
    document.body.firstElementChild.style.background ="red";
}


//define changeColor() in console.