const title = document.getElementById('title'); // ref by id
const content = document.querySelector('.content'); // ref by class

/* Dark mode light mode */
// const box = document.querySelector('.box'); // make object for use tag ".box"

// function darkMode(){
//    box.setAttribute('class','dark');
// }

// function lightMode(){
//    box.setAttribute('class','light');
// }

/* Node list */
const menu = document.getElementById('menu');
const item3 = document.getElementById('item-3');
const newItem = document.createElement('li');
newItem.innerText = "X";

function replaceItem(){
   menu.replaceChild(newItem,item3);
}

function removeItem(){
   menu.removeChild(newItem);
}

let count = 1;
function addItem(){
   const item = document.createElement('li'); // make li
   item.innerText = "Item "+(count++);
   menu.appendChild(item);
}

/* node Class */
const box = document.getElementById('box');
let status;

function addClassDarkMode(){
  box.classList.add("darkMode"); // add class "darkMode"
}

function deleteClass(){
   box.classList.remove("darkMode"); // remove class "darkMode"
}

function changeClass(){
   box.classList.toggle("darkMode"); // onces botton change class "darkMode" -> "lightMode"
   status = box.classList.contains("darkMode"); // check status
   console.log(box.classList.contains("darkMode")); 
   if(status){ // if status == true
      box.style.color="yellow";
   }else{
      box.style.color="red";
   }
}






