//perform some opration and reduce array to a single value
//it return that single value 
const array1 = [6,1,2,3,4];
const intialvalue=0;
const sumwithintialvalue = array1.reduce(
    (accumulator, currentValue) => accumulator+ currentValue,intialvalue,
);
//(accumulator, currentValue) => accumulator+ currentValue,intialvalue,
//^ in this line accumulator a variable for result write any and currentValue is val like some program of past
//^ this line is arrow function 
console.log(sumwithintialvalue);
const output = array1.reduce((res,curr) => {
    return res+curr;
});
console.log(output);
//at starting res = first val of array and curr = second val of array
//when it return it store value every time in res 
const large = array1.reduce((prev,curr) =>{
    if(prev>curr){
        return prev;
    }else{
        return curr;
    }
});
console.log(large);
//another way of this prev>curr? prev:curr;