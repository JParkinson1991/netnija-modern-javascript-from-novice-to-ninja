// variables & block scope

// Declared at root of document, registered in global scope
// I.e. anywhere within this file or other files!
// Same rules of scope apply to both const and let variable
let age = 30;

// Cannot redeclare variables in same scope
// let age = 50;

// noinspection PointlessBooleanExpressionJS
if (true) {
    // Variables can be redeclared in different scope
    // Note how re-declared value does not bubble out of local (if) scope
    let age = 40;

    // Only available in local (if scope)
    let name = 'shaun';

    console.log('inside first code block:', age, name);

    // Scope also extends across nesting, can inherit but cannot escape
    // Inheritance will traverse all parents scope (immediate outwards) until reference found
    if (true) {
        let age = 50;
        console.log('inside second code block:', age, name);

        // Variables defined with 'var' do not adhere to block scoping, they're always global
        var alwaysGlobal = 'always available';
    }
}

// Note how name not logged
// Consumes age from global scape, does not have access to name, consumes alwaysGlobal from second code block
console.log('outside code block:', age, name, alwaysGlobal);