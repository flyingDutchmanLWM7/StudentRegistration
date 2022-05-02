/*--- Spread Operator ---*/
// ...arrayName
const newArr = [100,200,300];
const data = [10,20,...newArr];
const data2 = [10,20];
const data3 = [999,9999];
const sumArr = [...newArr,...data2];
sumArr.push(999);
sumArr.push(...data3);

console.log(data);
console.log(data.length);

console.log(sumArr);
console.log(sumArr.length);



