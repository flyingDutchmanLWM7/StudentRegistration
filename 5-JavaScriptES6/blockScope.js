/*--- Block scope (let/constant) ---*/

// Before
var x=10;
const c=10;
if(x===10){
    var y=500;
    console.log("y = "+y)
}
console.log("y = "+y);

// After
let a=10;
if(a===10){
    let z=300;
    console.log("a = "+a);
}
console.log("z = "+z);

