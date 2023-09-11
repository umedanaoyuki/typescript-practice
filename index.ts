//クラス

class User {
    constructor(private _name: string) {
    }
    public sayHi() : void {
        console.log('hi i am' + this._name);
    }
}

class AdminUser extends User {
    private _age: number;
    constructor(_name: string, _age: number) {
        super(_name);
        this._age = _age;
    }
    public sayHi() : void {
        console.log('my age ' + this._age);
        super.sayHi();
    }
}

var bob = new AdminUser("Bob", 23);

bob.sayHi();