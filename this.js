// function sayName(name) {
//     console.log(`The name is: ${name} `);
// }

// sayName("ahmad");

// const person= {
//     name: 'ahmad',
//     sayName: function() {
//         console.log(`The name is: ${this.name} `);
//     }
// }

// person.sayName();

// function sayName(name) {
//     this.name=name;
// }

// const p1=new sayName('ahmad');
// console.log(p1.name);

globalThis.name='ahmad';

function sayName() {
    console.log(this.name);
}

sayName();
