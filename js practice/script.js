
function frd(...foods){
    console.log(foods);
}
function getf(...f){
    return f;
}
function sum(...a){
    let res = 0;
    for(let num of a){
        res += num;
    }
    return res;
}
const f1 = "pizza";
const f2 = "wet";
const f3 = "kidd";
const f4 = "roll";

frd(f1,f2,f3,f4)
const foods = getf(f1,f2,f3,f4);
console.log(foods);

console.log(sum(1,2,3));
