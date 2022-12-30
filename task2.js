let itemlist = document.querySelector('#items');

//parentelement
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = "gray";

//firstchild
console.log(itemlist.firstChild);

//firstelementchild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = "hey";

//lastchild
console.log(itemlist.lastChild);

//lastelementchild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent = "hello";

//netxsibling
console.log(itemlist.nextSibling);

//nextelementsibling
console.log(itemlist.nextElementSibling);

//previoussibling
console.log(itemlist.previousSibling);

//previouselementsibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color = 'red';

//createlement
let newDiv = document.createElement('div');

//addclass
newDiv.className = "hello";

//addId
newDiv.id = "hello1";

//attribute
newDiv.setAttribute('title' , 'hello div');

//creatTextNode
let divText = document.createTextNode('hello world');

//addtext
newDiv.appendChild(divText);

//add to DOM
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDiv , h1);

//before item
//let item = document.querySelector('li');
let li = document.querySelector('#items');

li.insertBefore(newDiv , li.children[0]);
