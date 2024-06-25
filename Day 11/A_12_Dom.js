let a = document.getElementsByTagName("div")[0];
//a.innerHTML +="<h1>Hello All From DebugShala...!</h1>"

//other way

//need :- I want to add any element at runtime 
//1.createElement():- 
let div = document.createElement("div");
div.innerHTML += "<h1>Hello All From DebugShala...!</h1>";
//a.appendChild(div);

//2.appendChild(); :-


//3. node.append(e) :- append at the end of the element.
//a.append(div);
//4. node.prepend(e) :- add at the start of the element.
//a.prepend(div);
//5. node.before(e) :- add before element.
//a.before(div);
//6. node.after(e) :- add after element.
//a.after(div);


//7 node.replaceWith() :- replace the node with given node.

a.replaceWith(div);