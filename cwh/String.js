//string 
let sre = "Dhruvil";
console.log(sre[0]);

//template literals
let sentenc =`this is a template litral`;
console.log(sentenc);
console.log(typeof sentenc);
//differnece between template literal and other 
let obj = {
    price : 10,
    item : "pen"
}
console.log(obj);
console.log("the cost of ",obj.item, "is ",obj.price,"$");
//use of template literal 
let output = `the cost of ${obj.item} is ${obj.price}`;
console.log(output);
//${var/expression/anything}  --> this cold placeholder
//the ehole process is called interpolation
//template literal always return string 