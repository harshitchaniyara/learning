document.write('<h1>Maps</h1>');

// Example 1
// how to define map with values and without values

const capitals = new Map([
    ['India', 'New Delhi'],
    ['USA', 'Washington'],
    ['UK', 'London'],
    ['Canada', 'Ottawa'],
    ['Australia', 'Canberra'],
    ['China', 'Beijing'],
]);


for(const [country, capital] of capitals){
    document.write(`<b>${country}</b> : ${capital} <br>`);
}

document.write('<br><br><br><br>');

// Example 2
// create blank map and set values

const userLoginTime = new Map();

userLoginTime.set('Viraj Manek', '9:45 AM');
userLoginTime.set('Ashutosh Agarwal', '6:15 PM');
userLoginTime.set('Rahul Agarwal', '7:15 PM');
userLoginTime.set('Nitin Agarwal', '6:45 PM');


for(const [user, time] of userLoginTime){
    document.write(`<b>${user}</b> : ${time} <br>`);
}

document.write('<br><br><br><br>');

// Example 3
// how to get values from map

document.write(`<b>Viraj Manek</b> : ${userLoginTime.get('Viraj Manek')} <br>`);
document.write(`<b>Ashutosh Agarwal</b> : ${userLoginTime.get('Ashutosh Agarwal')} <br>`);

document.write('<br><br><br><br>');

// Example 4
// insanceof operator

document.write('Map <b>instanceof</b> Object : ');
document.write(Map instanceof Object);
document.write('<br>');
document.write('userLoginTime <b>instanceof</b> Map : ');
document.write(userLoginTime instanceof Map);

