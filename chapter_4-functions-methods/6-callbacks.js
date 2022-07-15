// callbacks & foreach

// Defined callback function parameter
const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
}

// Call the function with callback function argument
myFunc((value) => {
    // do something
    console.log(value);
});

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (name, index) => {
    console.log(`${index} - Hello ${name}`);
};

people.forEach(logPerson);