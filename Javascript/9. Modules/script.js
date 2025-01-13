import { mul, addition, subtraction, PI as abc } from './utility.js';
// import add from './utility.js';

// console.log(add(2, 3));

document.getElementById('p01').innerHTML = mul(2, 3, 4);
document.getElementById('p02').innerHTML = addition(3, 4);
document.getElementById('p03').innerHTML = subtraction(2, 4);
document.getElementById('p04').innerHTML = abc;
// document.write(`<b>Multiply</b> : ${multiply(2, 3, 4)} <br>`);

