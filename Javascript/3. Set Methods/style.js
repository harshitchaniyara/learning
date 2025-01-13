// Example 1
// how to values get from set using  foreach loop

const cities = new Set(['Bangalore', 'Chennai', 'Mumbai', 'Rajkot', 'Pune']);

cities.forEach(function(city){
    document.write(`${city} * `);
});

document.write('<br><br><br><br>');

// Example 2
// Vuales() method 

const states = new Set(['Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Maharashtra', 'Telangana']);

const statesItrator = states.values();

document.write(statesItrator.next().value + '<br>');
document.write(statesItrator.next().value + '<br>');
document.write(statesItrator.next().value);

// same as work keys() method

document.write('<br><br><br><br>');

// Example 3
// entries() method

const countries = new Set(['India', 'USA', 'UK', 'Canada', 'Australia']);

const countriesItrator = countries.entries();

document.write(countriesItrator.next().value + '<br>');
document.write(countriesItrator.next().value + '<br>');
document.write(countriesItrator.next().value + '<br>');



