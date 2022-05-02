/*--- Arrow Function ---*/

// before
function fullnameBefore(fname, lname){
    return fname+lname;
}
console.log(fullnameBefore("kong","ruksiam"));

// after
fullnameAfter = (fname,lname) => fname+lname;
console.log(fullnameAfter("newKong","newRuksiam"));

setAge = (age) => "อายุ = "+age;
console.log(setAge(20));

