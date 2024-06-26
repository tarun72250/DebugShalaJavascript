// Events :- An event is an action as per user's interaction or instrjuction some input
// There are diff types of events get generated when user perform some actions like :- 
// mouse click , keyboard events , form elements events , and documents events.

//Mouse events ;-
//onmouseover event ;-



//onclick event :-
// let a = document.getElementById("one");
// a.onclick(alert('hii')); 

//Note :- Adding a handler in js,  overwrite the existing handler(inline)


//addEventListener() ;- is used to assign multple handlers to an event.

// document.getElementById("h1d").addEventListener("mouseover", over)

// document.getElementById("h1d").addEventListener("mouseout", out)

// function over() {
//     document.getElementById("h1d").style.height = "100px";
//     document.getElementById("h1d").style.width = "100px";
// }

// function out() {
//     document.getElementById("h1d").style.height = "150px";
//     document.getElementById("h1d").style.width = "150px";
// }




//Keyboard events :- 
//keydown event :-
//keyup event :-
//keypress event :- 

let a = document.getElementById("one");
a.addEventListener("keydown",onKeyDown);
a.addEventListener("keyup", onKeyUp);

function onKeyDown(event)
{
    document.getElementById("status").innerHTML += 'keydown:' + event.key+ '</br>'
}

function onKeyUp()
{
    document.getElementById("status").innerHTML += 'keyup:' + event.key + '</br>'
}


