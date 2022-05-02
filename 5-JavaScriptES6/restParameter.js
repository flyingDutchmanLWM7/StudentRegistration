/*--- Rest Parameter --- */ 
// send array to function
summation = (...numberArr) =>
{
    let total=0;
    for ( let number of numberArr) // spread member of Array(numberArr) to number
    { 
      total+=number;
    } 
    return total;
}

console.log(summation(1000,500,1,2,3,4,5,6,7,8,9,10));