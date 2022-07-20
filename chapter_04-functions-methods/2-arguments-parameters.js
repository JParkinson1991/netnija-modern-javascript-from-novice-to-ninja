// arguments & parameters

// No error when parameter not given, instead consumed as 'undefined'
// Parameters are local to the function, cannot be accessed outside of function scope
// Parameters not named so order is important
const speak = function(name = 'luigi', time = 'night') {
    console.log(`good ${time} ${name}`);
}

// Invoke with default parameter values
speak();

// Pass arguments
speak('mario', 'morning');

