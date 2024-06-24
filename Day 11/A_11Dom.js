//1.elem.getAttribute() :- Method uses to get the value of an attribute.

let a = one.getAttribute("class");
console.log(a);


//2.elem.hasAttribute() :- Method to check for an existence of an particular attribute.
//return boolean value.
console.log(one.hasAttribute("class"))//true;
console.log(one.hasAttribute("style")) //false;


//3.elem.setAttribute() :- This method use to set the value of an attribute.
//one.setAttribute(name,value);

//one.setAttribute("hidden","true");
let b = document.getElementById("one");
b.setAttribute("class","naman");


//4.elem.removeAttribute() :- method to remove the attribute of an element
//one.removeAttribute("class");


//Custom Attribute :- data-*
console.log(one.dataset)
console.log(one.dataset.one)
console.log(one.dataset.two)
one.dataset.two= "alfaiz";
one.dataset.one= "nitin";


