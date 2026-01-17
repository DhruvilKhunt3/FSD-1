// => sign og arrow function
//this function can be store in variable 
function sum(a,b){
    return a+b;
}
console.log(sum(1,2));
//modern js concept
console.log("---------");
const arrow = (a,b) => {
    console.log(a+b);
};
console.log(arrow);
arrow(1,2);
console.log("---------");
const multi = (a,b) => {
    console.log(a*b);
}
console.log(multi);
multi(2,3);
console.log("---------");
const div = (a,b) => {
    console.log(a/b);
}
console.log(div);
div(5,2);
//use let or const 
//when single line in arrowfunction create {} or not its optional
