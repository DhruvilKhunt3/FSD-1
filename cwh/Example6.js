let prices = [250,645,300,900,50];
let idx=0;
for(let price of prices){
    console.log(`price at index ${idx} = ${price}`);
    prices[idx] = prices[idx] -(price*0.1);
    idx++;
}
console.log("prices after discount");
console.log(prices);