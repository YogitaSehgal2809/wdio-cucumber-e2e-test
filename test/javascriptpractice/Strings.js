let string1="Hello World! "
console.log(`Before trimming length is ${string1.length}`);
string1=string1.trim()
console.log(`After trimming length is ${string1.length}`);
// substring
console.log(`substring is ${string1.slice(1,3)}`);
// get character at index
console.log(`character at 2nd index is ${string1[2]}`);
// split string
let strArr=string1.split(" ")
console.log(`Splitting string by space ${strArr}`);
// convert string to integer
let date='23'
let nextDate='27'
let diff=parseInt(nextDate)-parseInt(date);
console.log(`Difference betweeen dates is ${diff}`);
// convert number to string
diff.toString();
// concatenation
let string2=string1+" How are you?"
console.log(`String after concatenation is ${string2}`);
// returns starting index
console.log(`Index of World is ${string2.indexOf("World")}`);
// count occurence of string/alphabet
let count=0;
let val=string2.indexOf('H')
while(val!==-1){
    count++;
    val=string2.indexOf('H',val+1);
}
console.log(`Occurence of H is: ${count}`);