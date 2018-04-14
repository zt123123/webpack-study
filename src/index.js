import './app.less'


document.getElementById('img').setAttribute('src', require('./baidu.png'))

class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }

    say() {
        console.log(this.name);
    }
    hello() {
        console.log("我今年" + this.age);
    }
}

let person = new Person('张天', 23)
person.say();
person.hello()