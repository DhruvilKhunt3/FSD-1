let num=123;
alert("welcome");
prompt("your self");
let guess=prompt("guess the number");
do{
    guess = prompt("wrong number try again ");
}while(num!=guess);
console.log("congratulation ,you guess right number");
//prompt always return string so we not compair like this (!==)