//クラス
//静的メンバ(class自体に紐づいたメンバ)
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        //静的メンバにアクセスするためにはクラス名をつける
        User.count = User.count + 1;
    }
    User.prototype.sayHi = function () {
        console.log('hi i am' + this.name);
    };
    User.showDescription = function () {
        console.log("this class is about users");
    };
    User.count = 0;
    return User;
}());
var tom = new User("tom");
var bob = new User("bob");
console.log(User.count);
User.showDescription();
