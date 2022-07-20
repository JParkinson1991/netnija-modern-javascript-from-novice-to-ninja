// For loops
for (let i = 0; i < 5; i++) {
    console.log('in loop:', i);
}
console.log('loop finished');

// Looping unknown data lengths
const names = ['shaun', 'mario', 'luigi'];
for (let j = 0; j < names.length; j++) {
    //console.log('Name is:', names[j]);
    let html = `<p>${names[j]}</p>`
    console.log(html);
}
console.log('name loop finished');