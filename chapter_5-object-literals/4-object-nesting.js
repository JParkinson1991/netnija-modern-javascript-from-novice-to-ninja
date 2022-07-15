// object nesting


let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
    ],

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
            console.log(blog.title, blog.likes)
        });
    },
};

user.logBlogs();