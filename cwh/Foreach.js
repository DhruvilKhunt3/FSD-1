let arr = [1,2,3,4,"END"];
arr.forEach(function print(val){
    console.log(val);
})//starting ()
//arr.forEach(function print(val){
//^ in this line there is val is any variable
//we use this
arr.forEach((val,idx,arr) => {
    console.log(val,idx,arr);
});
//arr.forEach((val,idx,arr) => {
//^ in this line idx is index arr is arr it self
//three parameter in forEach
//forEach is high order function/method
//mean function which use another func as perameter or return another func