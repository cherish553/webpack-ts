class Persons {
    protected age: number;
    constructor(age: number) {
        this.age = age;
    }
}

// let greeter = new Person(24);
class Likefan extends Persons {
    private sex: string;
    constructor(sex: string,age:number) {
        super(age)
        this.sex = sex;
    }
    eat():void {
        this.sex='123'
        this.age=123
        // return "我爱吃饭,我今天 " + this.sex;
    }
}
const likefan=new Likefan('男',24)
console.log(likefan.eat())