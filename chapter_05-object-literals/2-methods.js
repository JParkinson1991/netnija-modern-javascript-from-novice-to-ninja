// methods

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
    logBlogs: function() {

    }
};

user.login();
user.logout();