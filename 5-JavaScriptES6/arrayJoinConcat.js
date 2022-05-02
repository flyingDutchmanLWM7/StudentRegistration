/*--- join & concat ---*/

// join array ---> string 
const data1 = [1,2,4];
console.log(data1.join("|||"));

// concat sum array 
const data2 = [1,2,4];
const allData = data1.concat(data2);
console.log(data2.concat(5,6,7,8,9)+" size = "+data2.concat(5,6,7,8,9).length);
console.log("original size: "+data2.length);
console.log(allData+" size = "+allData.length);