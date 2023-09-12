// Interface -> Class

interface GameUser {
    score: number;
    showCore(): void;
}

//interfaceをclassに実装する場合（この場合は、user classは score, showCore()を持っていないといけない）
class User implements GameUser{
    name: string;
    score: number = 0;

    constructor(name: string) {
        this.name = name;
    }
    sayHi(): void {
        console.log("hi i am " + this.name);
    }
    showCore(): void {
        console.log("score is " + this.score);
    }

}

const user = new User("testMan");
user.sayHi();
console.log(user.name);