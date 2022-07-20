// function declaration
function greet() {
    console.log('hello there');
}

greet();
greet();
greet();

// function expression
// function expressions are not 'hoisted' to the 'top' of file at runtime
// for example, 'speak' can only be triggered after declaration, however calls to 'great' can be called above the
// or before the function declaration
// Preference is to use function expressions to enforce good structure/flow of files
const speak =  function() {
    console.log('good day!');
};

speak();