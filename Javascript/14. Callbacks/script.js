function addition(a, b, callback){
    let sum = a + b;

    callback(sum);

}

function myDisplayer(result){
    console.log(`The result is ${result}`);
}
 addition(2, 6, myDisplayer);

 console.time("Time taken 1");
 const numbers = [1, -2, 3, 4, -5, 6, -7, 8, -9, 10];
 
 const posArr = [];

 numbers.forEach(function(number){
    if(number > 0){
        posArr.push(number);
    }
 });
 console.log(posArr);
console.timeEnd("Time taken 1");


console.time("Time taken 2");
const numbers1 = [1, -2, 3, 4, -5, 6, -7, 8, -9, 10];
const posArr1 = [];

const l = numbers1.length;

for(let i = 0; i < l; i++){
    if(numbers1[i] > 0){
        posArr1.push(numbers1[i]);
    }
}

console.log(posArr1);

console.timeEnd("Time taken 2");

console.time("Time taken 3");
const numbers3 = [1, -2, 3, 4, -5, 6, -7, 8, -9, 10];

function isPositive(number){
    return number > 0;
}

// function display


const studentQualification = [
    { name: "Yash", qualification: 'Software Engineer', score: 100 },
    { name: "Rahul", qualification: 'Software Engineer', score: 90 },
    { name: "Virat", qualification: 'Software Engineer', score: 80 },
    { name: "Yaju", qualification: 'Software Engineer', score: 70 },
    { name: "Ravi", qualification: 'Software Engineer', score: 60 },
]

function display(student){
    console.log(`Name : ${student.name} , Qualification : ${student.qualification}`);
}

studentQualification.forEach(display);

