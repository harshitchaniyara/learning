document.write('<h1>Destructuring</h1><br>');

// Example 1
// Destructuring Object

document.write('<b> 1) Destructuring Object</b><br><br>');

const laptop = {
    brand: 'Dell',
    model: 'XPS 13',
    price: 60000,
    memory: '8 GB',
    storage: '128 GB',
};

var { brand, model, price, memory, storage } = laptop;

document.write(`<b>Brand :</b> ${brand} <br>`);
document.write(`<b>Ram :</b> ${memory} <br>`);

// Example 2
// Object Default Values

document.write('<br><b> 2) Object Default Values</b><br><br>');

var { brand, model, price, display='15.6 Inches'} = laptop;

document.write(`<b>Display :</b> ${display} <br>`);

// Example 3
// Object properties alias 

document.write('<br><b> 3) Object properties alias</b><br><br>');

var { brand: br, model: mdl, price: pr, memory, storage } = laptop;

document.write(` <b>Brand :</b> ${br} <br>`);
document.write(`<b>Ram :</b> ${memory} <br>`);

document.write('<br> ---------------------------------------------- <br><br>');

// Example 4
// Destructuring Array

document.write('<b> 4) Destructuring Array</b><br><br>');

const events = ['Devcon', 'JSConf', 'NodeConf','Laracon'];

var [event1, , event3, event4, event5='New added event'] = events;

document.write(`${event1}, ${event3}, ${event4}, ${event5} <br>`);

// Example 5
// Array positional destructuring

document.write('<br><b> 5) Array positional destructuring</b><br><br>');

const cars = ['BMW', 'Mercedes', 'Audi', 'Volvo'];

var {[1]:car1, [0]:car2} = cars;

document.write(`<b>Car 1</b> : ${car1} <br>`);

document.write(`<b>Car 2</b> : ${car2} <br>`);

// Example 6
// rest property

document.write('<br><b> 6) rest property</b><br><br>');

const bikes = ['Honda', 'Yamaha', 'Suzuki', 'Trek'];

var [, , ...bikes1] = bikes;

document.write(`<b>Bikes</b> : ${bikes1} <br>`);

// Example 7
// swapping variables

document.write('<br><b> 7) swapping variables</b><br><br>');


let carrots = 'Carrots';
let potatoes = 'Potatoes';

 [carrots, potatoes ] = [potatoes, carrots];

document.write(`<b>Carrots</b> : ${carrots} <br>`);
document.write(`<b>Potatoes</b> : ${potatoes} <br>`);

// Example 8
// string destructuring

document.write('<br><b> 8) string destructuring</b><br><br>');

const string = 'Hello World';

var [first, second, ...rest] = string;

document.write(`<b>First</b> : ${first} <br>`);
document.write(`<b>Second</b> : ${second} <br>`);   
document.write(`<b>Rest</b> : ${rest} <br>`);