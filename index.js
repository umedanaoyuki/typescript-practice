var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHi = function () {
        console.log("hi i am " + this.name);
    };
    return User;
}());
var user = new User("testMan");
user.sayHi();
console.log(user.name);
