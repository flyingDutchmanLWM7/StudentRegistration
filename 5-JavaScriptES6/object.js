/*--- Object ---*/

const username = "kongruksiam";

const customer = {
    customerName : username,
    age : 40,
    address : "Bangkok",
    showData(){
        console.log("customer information: "+this.customerName,this.age,this.address);
    }
}
customer.showData();