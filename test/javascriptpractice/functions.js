// sample function
function add(a,b){
return a+b
}
console.log(add(2,3));

// anonymous functions - dont have a name, can be assigned to variable
let sum2=function(a,b){
    return a+b
    }

console.log(sum2(10,13))
let sum3=(a,b)=>a+b
console.log(sum3(10,20))    