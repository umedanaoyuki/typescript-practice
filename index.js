// Interface -> Class
//interfaceをclassに実装する場合（この場合は、user classは score, showCore()を持っていないといけない）
var User = /** @class */ (function () {
    function User(name) {
        this.score = 0;
        this.name = name;
    }
    User.prototype.sayHi = function () {
        console.log("hi i am " + this.name);
    };
    User.prototype.showCore = function () {
        console.log("score is " + this.score);
    };
    return User;
}());
var user = new User("testMan");
user.sayHi();
console.log(user.name);
