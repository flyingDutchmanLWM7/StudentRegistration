/*--- Array Reduce ---*/
const cart = [
    { name:"backpack1", price:500 },
    { name:"backpack2", price:600 },
    { name:"backpack3", price:700 }
]
// array.reduce((ค่าที่ถูกประมวลผล,e)=>{}, defualt value)
const result = cart.reduce((values,e,i)=>{
    const total = e.price+values    
    console.log(`order ${i+1} ${e.name} price = ${e.price}`)
    return total;       
},0)

console.log(`summation = ${result}`);
