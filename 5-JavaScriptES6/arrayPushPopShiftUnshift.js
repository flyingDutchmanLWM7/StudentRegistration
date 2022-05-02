/*--- push pop shift unshift ---*/
const data = [1,2,4];
const pushData = [500,100,300];
// push
data.push(...pushData);
console.log(" |push| add elements: "+data);

// pop
data.pop()
console.log(" |pop| delete last element: "+data);

// shift
data.shift();
data.shift();
console.log(" |shift| delete first element: "+data);

// unshift
data.unshift(1,2);
console.log(" |unshift| add first element: "+data);