// this

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],

    // method
    login: function() {
        console.log('the user logged in');
    },

    logout: function() {
        console.log('the user logged out');
    },

    // Access object properties in method (this)
    // This references to object instance in which method is being invoked against
    // 'this' is a context object, represents context in which current code is executing within
    logBlogs: function() {
        console.log('this user has written the following blogs:')
        this.blogs.forEach((blog) => {
            console.log(blog)
        });
    },

    // Shorthand function/method declaration
    // Still has update context object referencing object being acted upon
    shorthand(){
        console.log(this);
    },

    // When using arrow functions, context object is not update, thus 'this' will not reference the object
    // being acted upon. Note how console logs the window context object
    arrow: () => {
        console.log(this);
    }
};

// global context (window object)
// console.log(this);

user.logBlogs();