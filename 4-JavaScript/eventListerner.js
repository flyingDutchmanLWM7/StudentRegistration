// ref
const menuListerner = document.getElementById('menuListerner');
const display = document.getElementById('display');
const btn = document.getElementById('btn');

// event
menuListerner.addEventListener('change',getMenu);

btn.addEventListener('click',clickAlert)

function clickAlert(){
   alert("Welcome to javaScript");
}

function getMenu(){
   console.log(menuListerner.value);
   display.innerText = menuListerner.value;
}