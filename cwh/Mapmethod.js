//similar to for each
//arr.map(callbackFnx(val,idx,array))
//it return new array and foreach don't
let num = [1,2,3,4,5];
//to print 
num.map((val) =>{
    console.log(val);
});
//to create new array
let newarr = num.map((val) =>{
    return val;
});
console.log(newarr);