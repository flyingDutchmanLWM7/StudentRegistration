/*--- defualt parameter ---*/
getDatacustomer = (customerName, customerAddress="bangkok") =>{
  const address = `customer name : ${customerName}
      address : ${customerAddress}`
  return address;
}

console.log(getDatacustomer("Suttiphong","37/2 m.7 Takuathung , Phangnga 82130"));
console.log(getDatacustomer("Suttiphong"));


