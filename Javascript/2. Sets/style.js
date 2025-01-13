document.write('<h1>Sets</h1>');

// Example 1
// how to define set 

const fruites = new Set(['apple', 'banana', 'orange', 'grapes', 'mango']);

for(const fruit of fruites){
    document.write(fruit + ' | ');
}

document.write('<br><br> ----------------------------------------------------------------------------------------------------------- <br><br>');

// Example 2
// how to define blank set

const vehicles = new Set();

vehicles.add('car');
vehicles.add('bike');
vehicles.add('bus');
vehicles.add('truck');

let vehicle;

for(vehicle of vehicles){
    document.write(vehicle + ' | ');
}

document.write('<br><br> ----------------------------------------------------------------------------------------------------------- <br><br>');

// Example 3
// how to add element to set using variable

// document.write('<h2>ERP Modules</h2>');
const erpModules = new Set();

let inventory = 'Inventory';
let manufacturing = 'Manufacturing';
let sales = 'Sales';
let finance = 'Finance';
let humanResources = 'Human Resources';

erpModules.add(inventory);
erpModules.add(manufacturing);
erpModules.add(sales);
erpModules.add(finance);
erpModules.add(humanResources);


let module;

for(module of erpModules){
    document.write(module + ' | ');
}

document.write('<br><br> ----------------------------------------------------------------------------------------------------------- <br><br>');

// Example 4
// how to check if element is in set

for(const module of erpModules){
    if(erpModules.has(module)){
        document.write(`<b>${module}</b> is in set <br>`);
    }
}

document.write('<br> ----------------------------------------------------------------------------------------------------------- <br><br>');

// Example 5
// how to remove element from set

erpModules.delete(finance);

for(const module of erpModules){
    document.write(module + ' | ');
}
