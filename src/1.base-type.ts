// 1.数字
const a: number = 1
// 2.boolean
let isDone: boolean = false;
// 3.字符串
let ssas: string = "bob";
ssas = "smith";
// 4.数组
let list: (string|number)[] = [1, '2', '3'];
let list1: Array<number> = [1, 2, 3]
// 元组 Tuple
let x: [string, number];
x=['1',2]
// 枚举
enum Auth {admin, user=0}

// Any
const an=1
// Void
function aaa():void{
}
// Null 和 Undefined
let aaaa:string
// Never
// symbol
let aasdasdas:symbol=Symbol(1)
let ddddd:symbol=Symbol(1)
const c={
    [ddddd]:123,
    [aasdasdas]:444
}
console.log(c)
// 断言
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; // jsx中不支持
let strLengths: number = (someValue as string).length;