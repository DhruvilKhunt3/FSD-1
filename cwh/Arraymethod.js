let veggies = ["potatto","tomato","apple","bringle"];
console.log(veggies);
veggies.push("chips","Maggie");
console.log(veggies);
console.log(veggies.pop());//pop return value which was delet 
console.log(veggies);
console.log(veggies.toString());//cant chamge orignal array
let price = [1,2,3,4];
console.log(price.concat(veggies));
//unshift = push but it reverse
//shift = pop but it reverse
let slice = veggies.slice(0,2);
console.log(slice);
/*--------------
splice method
>it use for do changes in array
>syntax
    splice(startIndex,delCount,newelements);
    delcount= how many elemnt we want to delet fromstartindex
    newelment = if we add new element and it add on startindex
>note:it return delet elemt 
>note:if we write only index it react like slice  but i delet after index and change orignal array 
*/
let arr = veggies.splice(1,2,"CREAM","ICECREAME");
console.log(arr);
console.log(veggies);
//for add 
veggies.splice(2,0,101);
console.log(veggies);
//for replace
veggies.splice(2,1,102);
console.log(veggies);