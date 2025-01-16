const userDetails = {
    firstName: "Barack",
    lastName: "Obama",
    age: 45,
    isMarried: true,
    occupation: "President",
};

const userDetails2 = {
    firstName: "Nelson",
    lastName: "Mandela",
    age: 45,
    isMarried: true,
    occupation: "President",
};

const userDetails3 = {
    firstName: "Valdimir",
    lastName: "Khadzhiev",
    age: 45,
    isMarried: true,
    occupation: "President",
};

let fullName =  function(city,country){
    return `${this.firstName} ${this.lastName} from ${city}, ${country}`;
}

console.log(fullName.call(userDetails, "New York", "USA"));
console.log(fullName.apply(userDetails2,['Raigada','India']));




