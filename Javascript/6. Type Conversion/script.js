document.write('<h1>Type Conversion</h1>');

document.write('<br><b><h3>1) Converting String to Number</h3></b>');

const number = Number('123');

document.write(`Number('123') : <b>${number}</b> <br>`);

const number2 = Number('123.45');

document.write(`Number('123.45') : <b>${number2}</b> <br>`);

const number3 = Number(" ");

document.write(`Number(" ") : <b>${number3}</b> <br>`);

const number4 = Number("123 45");

document.write(`Number("123 45") : <b>${number4}</b> <br>`);

const number5 = Number("Leonardo DiCaprio");

document.write(`Number("Leonardo DiCaprio") : <b>${number5}</b>`);

//------------------------------------------------------------------

document.write('<br><b><h3>2) Converting Nuumber to String</h3></b>');

let string = String(123);

document.write(`String(123) : <b>${string}</b> <br>`);

let string2 = String(123.45);

document.write(`String(123.45) : <b>${string2}</b> <br>`);

let string3 = String(" ");

document.write(`String(" ") : <b>${string3}</b> <br>`);

let string4 = String(123+45);

document.write(`String("123+45") : <b>${string4}</b>`);

document.write('Also use <b>toString()</b> method<br>');

document.write('<br><b><h3>3) Parse Int</h3></b>');

const integer = parseInt('123');

document.write(`parseInt('123') : <b>${integer}</b> <br>`);

const integer2 = parseInt('123.45');

document.write(`parseInt('123.45') : <b>${integer2}</b> <br>`);

const integer3 = parseInt(" ");

document.write(`parseInt(" ") : <b>${integer3}</b> <br>`);

const integer4 = parseInt("123 45");

document.write(`parseInt("123 45") : <b>${integer4}</b> <br>`);

const integer5 = parseInt("412Leonardo");

document.write(`parseInt("412Leonardo") : <b>${integer5}</b> <br>`);

const integer6 = parseInt("Leonardo785");

document.write(`parseInt("Leonardo785") : <b>${integer6}</b>`);

document.write('<br><b><h3>4) Parse Float</h3></b>');

const float = parseFloat('123');

document.write(`parseFloat('123') : <b>${float}</b> <br>`);

const float2 = parseFloat('123.45ase');

document.write(`parseFloat('123.45ase') : <b>${float2}</b> <br>`);

const float3 = parseFloat("sef123");

document.write(`parseFloat("sef123") : <b>${float3}</b> <br>`);

document.write('<br><b><h3>5) toFixed</h3></b>');

const fixed = 123.45.toFixed();

document.write(`123.45.toFixed() : <b>${fixed}</b> <br>`);

const fixed2 = 123.45.toFixed(1);

document.write(`123.45.toFixed(1) : <b>${fixed2}</b> <br>`);

document.write('<br><b><h3>6) valueOf</h3></b>');

let num = Number(123);

document.write(`Number(123) : <b>${num}</b> <br>`);

let str = String('Hello');

document.write(`String('Hello') : <b>${str}</b> <br>`);
