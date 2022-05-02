/*--- search in Array ---*/
const colors = ["red","green","blue","pink","red"];
console.log(colors);

// indexOf(data)
console.log("index of| "+colors.indexOf("pink"));

// find(data)
console.log("find data in Array| "+colors.find(element=>element==="red"));

// finIndex(data)
console.log("find index in Array| "+colors.findIndex(element=>element==="green"));