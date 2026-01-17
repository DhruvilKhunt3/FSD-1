let s = prompt("Enter any sentence or word");
function Vowel(s){
    let count=0;
    for(const char of s){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u" || char==="A" || char=="E" || char=="I" || char=="O" || char=="U"){
            count++;
        }
    }
    return count;
}
console.log("total vowels in enter sentence or word --> ",Vowel(s));
const arrow = (s) => {
    let count=0;
    for(const char of s){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u" || char==="A" || char=="E" || char=="I" || char=="O" || char=="U"){
            count++;
        }
    }
    return count;
};
console.log("total vowels in enter sentence or word --> ",arrow(s));