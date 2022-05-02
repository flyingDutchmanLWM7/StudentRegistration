function welcome(){
   alert("Welcome to my website");
}

function hightlight(obj){
   obj.style.background="black";
   obj.style.color="white";
}

function unhightlight(obj){
   obj.style.background="white";
   obj.style.color="black";
}

function getMenu(){
   const menu = document.getElementById('menu');
   const display = document.getElementById('display');
   console.log(menu.value.toUpperCase());
   display.innerText = menu.value;
}

function linkHightLight(obj){
   obj.style.background="black";
   obj.style.color="white";
}

function unLinkHightLight(obj){
   obj.style.background="white";
   obj.style.color="black";
}