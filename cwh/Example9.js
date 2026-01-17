let arr = [1,2,3,4,5];
arr.forEach((val) =>{
    console.log(`squr of ${val} is ${val**2}`);
});
console.log("-------");
let cal = (val) => {
    console.log(`squr of ${val} is ${val**2}`);
}
arr.forEach(cal);