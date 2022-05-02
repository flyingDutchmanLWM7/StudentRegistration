/*--- Splice Slice ---*/
const data = [1,2,4];
const pushData = [500,100,300];
const allData = data.concat(pushData);

// Splice spilce(addressDelete, countDelete, Insertmember);
console.log(" |spilce| before splice : "+allData);
allData.splice(3,1,999);
console.log(" |spilce| after splice : "+allData);

// Slice slice(firstAddress, lastAddress-1);
console.log(" |slice| show data for index 1 to (5-1) : "+allData.slice(1,5));
