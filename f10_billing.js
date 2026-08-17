//const/let - don't change their values throughout the pgm /var - can change, const wont even let you define it again
// let item1 = "mobile";
// {let item1 = "case";}
// let item2 = "case";

console.clear();
const prompt = require('prompt-sync')();
const store = "Aryas";
console.log(store);

let items = ["item1", "item2", "item3"];
let prices = [2000, 6700, 3999,4672,1999];
// console.log(items);
// console.log(prices);

//number of items in the array
// console.log(items.length );
items.push("item4", "item5");
// items.pop();
console.log(items);

//customer oriented billing
console.log("Billing System");
console.log();
console.log("SrNo.\t", "Item\t", "Price"); 
for( let i =0; i<items.length; i++){
    console.log((i+1)+"\t",items[i], "\t", prices[i]);
}
console.log();
let srno = Number(prompt("Enter Item No : "));
let quantity = Number (prompt("Enter Quantity : "));

//billing

let price = prices[srno-1];
let cost = price*quantity;
let discount = 0;
if(cost >= 5000) {  discount = cost*0.05;}
else if(cost >= 2000 ){ discount = cost*0.02; }
else { discount = cost*0.01;}
console.log("Your Bill Amount is : ", cost - discount);

//13315.2
//14016
console.log();