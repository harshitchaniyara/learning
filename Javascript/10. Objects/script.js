// Example 1 
// How many ways to define object ?

document.write("<h2> How many ways to define object ?</h2>");

document.write("<h3>1. Using object literal notation</h3>");
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isMarried: true,
    occupation: "Software Engineer",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

document.write('<h3>2. New keyword using object define</h3>');

const laptop = new Object();

laptop.brand = "Dell";
laptop.model = "Inspiron";
laptop.price = 200000;

document.write('<h3>3. Object define using object constructor</h3>');

function Laptop(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}


const macbook = new Laptop("Apple", "MacBook", 100000);

console.log(Object.entries(person));

// Object.entries(macbook).forEach(function(entry) {
//     entry.forEach(function(value) {
//         console.log(value);
//     });
// });

const test =  [['e',1,2], ['f',3], ['g',4,5,6,8]];

console.log(Object.fromEntries(test));

// console.log(Object.fromEntries(Object.entries(macbook)));

// console.table(macbook.brand);

const target = { firstName: "William", age: 30, isMarried: true };
const source = { firstName: "John", isMarried: false, birthday: "1990-01-01" };




// console.log(Object.assign(target, source));