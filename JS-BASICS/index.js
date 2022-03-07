console.log('hello world');

let person = {
    name: 'Mosh',
    age: 30
};

let selection = 'name';

person[selection] = 'Marry';
console.log(person)

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors[2]);

function greet() {
    console.log('hello');
}

greet();