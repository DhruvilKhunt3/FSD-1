let div1 = document.querySelectorAll(".box");
for(let i of div1){
    console.log(i);
}
div1[0].innerText = "value one";
div1[1].innerText = "value two";
div1[2].innerText = "value three";
for(let i of div1){
    console.log(i);
}