// クラス
// public(デフォルト)
var User = /** @class */ (function () {
    function User(_name) {
        this._name = _name;
    }
    User.prototype.sayHi = function () {
        console.log('hi i am' + this._name);
    };
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
set;
name(newValue, string);
{
    this._name = newValue;
}
var tom = new User('tom');
tom.name = "TOM";
console.log(tom.name);
tom.sayHi();
