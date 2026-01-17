//DOM = document object mode
//all about html,css,javascript
alert("welcome chife");
prompt("Your self");
console.dir(document.body);
console.log(document.body);

//selecting with id 
//>document.getElementById("myId")
//for my id go to index write in < id=" ">
let heading1=document.getElementById("1");//return value of id 1 
console.log(heading1);
//in css #id{} also do with this way for changes 
//we create same heading but diff id 
//------------------------------------
//selecting with class
//for create class go to index write <class=" "> create same name of class which want 
//in css do .classname and do changes
let myclass = document.getElementsByClassName("web");
console.dir(myclass);
console.log(myclass);
//it like aray it is collection of html
//------------------------------
//selecting by tag 
let para = document.getElementsByTagName("p");
console.log(para);
//----------------------------
//querySelector
//it can decide which type we need of html get bye any tag,class,id
let ele = document.querySelector("p");//matching 1st element
console.dir(ele);
let eleall = document.querySelectorAll("p");
console.dir(eleall);
//write class name like this> document.querySelector(".myclass");
//for id write #id
//--------------------------
//properties 
//1.tagName 
//2.innerText
//3.innerHTML
//4.textContent
//1>ele.tagName
//print tag means class id anything 
//2. 
console.dir(document.body.firstChild);
let div = document.querySelector("div");
console.dir(div);