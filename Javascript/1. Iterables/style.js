// Iterables Example 1

const fruits = new Map([
    ['apple', '500'],
    ['banana', '200'],
    ['orange', '100'],
    ['grapes', '300'],
    ['mango', '400'],
]);

for (const [fruit, price] of fruits) {
    document.write(`${fruit}: ${price}<br>`);
}


document.write('<br> ***************************************************************************************************************** <br><br>');

// Iterables Example 2

const bike = ['honda', 'yamaha', 'suzuki', 'yamaha'];

const itrator = bike[Symbol.iterator]();

document.write(itrator.next().value + '<br>');
document.write(itrator.next().value);

document.write('<br><br> ***************************************************************************************************************** <br><br>');

// Iterables Example 3

const numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const numberItreator = numbers[Symbol.iterator]();

for (const number of numberItreator) {
    document.write(number + '<br>');
}

document.write('<br> ***************************************************************************************************************** <br><br>');

// Iterables Example 4

const name = 'John Doe';

let nameItreator = name[Symbol.iterator]();

document.write(nameItreator.next().value + '<br>');
document.write(nameItreator.next().value + '<br>');
document.write(nameItreator.next().value + '<br>');
document.write(nameItreator.next().value + '<br>');
document.write(nameItreator.next().value + '<br>');
document.write(nameItreator.next().value + '<br>');
document.write(nameItreator.next().value + '<br>');
document.write(nameItreator.next().value + '<br>');

// document.write('<br> ***************************************************************************************************************** <br><br>');
// Iterables Example 5

const games = ['chess', 'poker', 'mahjong', 'checkers'];

function gameItrator(games) {
    let index = 0;

    return {
        next: function next() {
            if(index < games.length) {
                return {
                    value: games[index++], done: (index < games.length ? false : true)
                }
            }
        }
    }
}

const iterators = gameItrator(games);

console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());