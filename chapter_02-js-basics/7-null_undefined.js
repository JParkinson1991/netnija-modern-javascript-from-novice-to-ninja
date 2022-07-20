let age;

// undefined, NaN, 'The age is undefined'
// undefined given by browser when variable not initialised with value
// NaN due to operation on non-numeric value
console.log(age, age + 3, `the age is ${age}`);

age = null;
// null, 3, the age is null
// null due to value,
// 3 as null is treat as 0 in math operators
console.log(age, age + 3, `the age is ${age}`);