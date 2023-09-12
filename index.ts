//クラス
//静的メンバ(class自体に紐づいたメンバ)

class User {
    name: string;
    constructor(name: string) {
        this.name = name
        //静的メンバにアクセスするためにはクラス名をつける
        User.count = User.count + 1;
    }
    public sayHi() : void {
        console.log('hi i am' + this.name);
    }
    static count: number = 0;
    static showDescription():void {
        console.log("this class is about users");
    }
}

let tom = new User("tom");
let bob = new User("bob");
console.log(User.count)
//インスタンスを作らなくても呼び出すことができる
User.showDescription();

