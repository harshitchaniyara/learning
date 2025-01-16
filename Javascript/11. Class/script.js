class Person {
    constructor(firstName, lastName, age, isMarried, occupation){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isMarried = isMarried;
        this.occupation = occupation;
    }

    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const american = new Person("Barack", "Obama", 45, true, "President");

console.log(american.fullName());