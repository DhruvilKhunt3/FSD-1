//for object
let student = {
    name : "dhruvil",
    age : 18,
    cgpa : 9.5,
    isPass : true
};
for(let i in student){
    console.log(i,"-->");
    console.log(student[i]);
}//it return key
//we write in real time student["any var name"]
//but if we print value of var we dont write (" ") 
//key means var name in object