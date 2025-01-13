document.write('<h1>Map Methods</h1>');

// Example 1
// map size method

const memoryAddress = new Map();

memoryAddress.set('Viraj Manek', '0x12345678');
memoryAddress.set('Viraj Shah', '0x87654321');
memoryAddress.set('Yuvraj Roy', '0x98765432');
memoryAddress.set('Yash Chopra', '0x11111111');


memoryAddress.forEach(function(value,key){
    document.write(`<b>${key} : </b> ${value} <br>`);
});

document.write('<br> Map size is : <b>' + memoryAddress.size + '</b>');

// Example 2
// map delete method
document.write('<br><br> <b>Delete the pair</b> <br><br>');
memoryAddress.delete('Viraj Manek');

memoryAddress.forEach(function(value,key){
    document.write(`<b>${key} : </b> ${value} <br>`);
});

// Example 3
// map clear method
document.write('<br><br> <b>Clear the map</b> <br><br>');
memoryAddress.clear();

memoryAddress.forEach(function(value,key){
    document.write(`<b>${key} : </b> ${value} <br>`);
});

// Example 4
// map has method
document.write('<br> <b>Check if the map has a pair</b> <br><br>');

if(memoryAddress.has('Viraj Manek')){
    document.write('Viraj Manek is present in the map');
} else{
    document.write('Viraj Manek is not present in the map');
}

document.write('<br><br> <b>Entries Method</b> <br><br>');

// Example 5
// map entries method

const contactBook = new Map([
    ['Rahul', '+91 987654321'],
    ['Marshal', '+91 123456789'],
    ['Viraj', '+91 111111111'],
    ['Yash', '+91 123456789'],
]);

contactBook.forEach(function(value,key){
    document.write(`<b>${key} : </b> ${value} <br>`);
});

const contactBookEntries = contactBook.entries();

document.write('<br>' + contactBookEntries.next().value);

document.write('<br><br> <b>Keys Method</b> <br><br>');

const contactBookKeys = contactBook.keys();

document.write(contactBookKeys.next().value);

document.write('<br><br> <b>Values Method</b> <br><br>');

const constactBookValues = contactBook.values();

document.write(constactBookValues.next().value);

document.write('<br><br> <b>Object as Keys</b> <br><br>');

const framwork = new Map();

const framwork1 = { name: 'Laravel' };
const freawork2 = { name: 'Vue.js' };
const framework3 = { name: 'React.js' };

framwork.set(framwork1, 'Taylor Otwell');
framwork.set(freawork2, 'Evan You');
framwork.set(framework3, 'Brian Takita');

document.write('<br>' + framwork.get(framwork1));

// both are different " " using get and " " without get
//document.write('<br>' + framwork.get("freawork1"));


document.write('<br><br> <b>Map Group By Method</b> <br><br>');

// Example 6
// map group by method

const fruits = [
    { name: 'Apple', price: 150 },
    { name: 'Orange', price: 200 },
    { name: 'Banana', price: 125 },
    { name: 'Mango', price: 350 },
    { name: 'Grapes', price: 250 },
];

function priceSorter({ price }){
    return price > 160 ? 'High' : 'Low';
}

const result = Map.groupBy(fruits, priceSorter);

// console.log(result);

const lowPriceFruits = result.get("Low");
const highPriceFruits = result.get("High");

for(const x of lowPriceFruits){
    document.write(`Low Price Fruit below 160 Rs : ${x.name} - ${x.price} Rs <br>`);
}

document.write('-----------<br>');

for(const y of highPriceFruits){
    document.write(`High Price Fruit above 160 Rs : ${y.name} - ${y.price} Rs<br>`);
}
