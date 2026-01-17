//array is object it self
let marks = [97,87,77,67];
console.log(marks);
console.log(marks.length); //property
let heroes = ["ironman","blackwidow","spiderman"];
console.log(heroes);
console.log(heroes.length);
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}
for(let el of marks){
    console.log(el);
}
for(let hero of heroes){
    console.log(hero.toUpperCase());
}