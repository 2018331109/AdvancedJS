function Person(fName, lName) {
    this.firstName=fName;
    this.lastName=lName;
}

const p1=new Person('ahmadul', 'hasan');
const p2=new Person('sun', 'shine');

Person.prototype.getFullName=function() {
    return this.firstName+' '+this.lastName;
}

console.log(p1.getFullName());

// using class

class Person1 {
    constructor(fName, lName) {
        this.firstName=fName;
        this.lastName=lName;
    }

    sayName() {
        return this.firstName+' '+this.lastName;
    }
}

const p3=new Person1('ahmadul', 'hasan');
console.log(p3.sayName());

class SuperHero extends Person1 {
    constructor(fName, lName) {
        super(fName, lName);
        this.isSuperHero=true;
    }

    fighter() {
        console.log('fights for people');
    }
}

const batman=new SuperHero('bruce', 'wayne');
console.log(batman.sayName());