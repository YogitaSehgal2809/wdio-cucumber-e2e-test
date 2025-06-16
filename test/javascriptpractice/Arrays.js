let marks=Array(6)
// Assigning elements to array
marks=new Array(20,30,40,50,60,70)
// marks=[1,2,3,4,5,6]

// printing element at an index
console.log(marks[2]); //40

// printing array
console.log(marks)

// creates subarray from index 2 to 4
let subarray=marks.slice(2,5)
console.log(`Subarray is: ${subarray}`)

// modifying element at index
marks[3]=14
console.log(marks)

// length of array
console.log(marks.length)

// append new element to end of array
marks.push(80)
console.log(marks)
console.log(marks.length)

// delete element from end of array
marks.pop()
console.log(marks)
console.log(marks.length)

// append new element to starting of array
marks.unshift(10)
console.log(marks)
console.log(marks.length)

// know the index of an element - returns -1 if not found
console.log(marks.indexOf(34));

// check if element is available in array
console.log(marks.includes(96));

let sum=0;
// printing elements of an array
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
    sum+=marks[i];
}
console.log(`sum of elements of array is ${sum}`);

// get sum of elements using reduce
// reduce(accumulator,individual array elements)
// accumulate values by iteration
let total=marks.reduce((sum,marks)=>sum+marks,0)
console.log(`sum of elements of array using reduce is ${total}`);

// pick even numbers from array
let score=[9,10,3,4,7]
let evenScores=[]
for(let i=0;i<score.length;i++){
    if(score[i]%2==0)
        evenScores.push(score[i])
}
console.log(`elements of array are ${score}`);
console.log(`even elements of array are ${evenScores}`);

// filter values from array
let newFilterEvenScores=score.filter(s=>s%2==0)
console.log(`even elements of array using filter are ${evenScores}`);

// map modifies each value of array to new value
let mapScores=newFilterEvenScores.map(s=>s*3)
console.log(`even elements multiplied by 3 using map are ${mapScores}`);

let sumMapScores=mapScores.reduce((sum,val)=>sum+val,0)
console.log(`sum of even elements multiplied by 3 using reduce are ${sumMapScores}`);

let sumValue=score.filter(s=>s%2==0).map(s=>s*3).reduce((sum,val)=>sum+val,0)
console.log(`sum of even elements multiplied by 3 using method chaining is ${sumValue}`);