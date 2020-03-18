interface Person {
    readonly name:string
    age:number
    sex?:number
}
const person:Person = {
    name: 'cherish',
    age: 24,
}
person.age= 23
// readonly 和 const 区别

// const func = function(person:Person){}
// func({name:'cherish',age:23})

interface Func{
   (name:string,age:number):string
}
const asdasd:Func=(asd:string,ccc:number):string=>{
    return asd
}
asdasd('adsa',111)

interface Get {
   page:number
   size:number
}

interface Square extends Get {
    name: number;
}

interface Squareaa extends Get {
    age: number;
}