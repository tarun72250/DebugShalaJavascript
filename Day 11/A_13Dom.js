//insertAdjacentHTML / Text / Element
//:- this method is used to insert HTML . The 1 parameter is code word , specifying where to insert these element 
//beforebegin :- Insert HTML immediately at before element
//afterbegin :- Insert html into element at the beginning

//beforeend :- Insert html into element at the end
//afterend :- Insert html immediately after element.

//first.insertAdjacentHTML('beforebegin', '<div class="test"> beforebegin</div>')
//first.insertAdjacentHTML('afterbegin', '<div class="test"> afterbegin</div>')
//first.insertAdjacentHTML('beforeend', '<div class="test"> beforeend</div>')
//first.insertAdjacentHTML('afterend', '<div class="test"> afterend</div>')


ola.insertAdjacentHTML('beforebegin','<p>Hello</p>');
ola.insertAdjacentHTML('afterend', '<p>Hello</p>');


//node removal method
let id1 = document.getElementById("ola");
id1.remove();


