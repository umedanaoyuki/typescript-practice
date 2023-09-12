
class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHi(): void {
        console.log("hi i am " + this.name);
    }
}

const user = new User("testMan");
user.sayHi();
console.log(user.name);