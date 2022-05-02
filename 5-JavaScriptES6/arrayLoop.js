/*--- loop ---*/

const data = [1,2,3,4,5,6,7,8,9,10];
let count = 0;
let sum = 0;
let countRound = 1;

// for Each loop all data
console.log("for Each");
data.forEach(member => {
    sum+=member;
    console.log(`index ${count} = ${member}`);
    console.log(`summation round ${countRound} = ${sum}`);
    count++;
    countRound++;
});

// for of loot all data & can use break, continue
console.log("\nfor off");
for (const element of data){
    console.log(`member array data = ${element}`);
}

// for loop
console.log("\nfor loop");
for (let i=0; i<data.length; i++){
    console.log("index ["+i+"] = "+data[i]);
}