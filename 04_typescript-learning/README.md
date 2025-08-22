## TS notes:

### 1. variable type:
 1.1 primary type
 -- boolean
 let flag:blooean = true;
 --number
 let age:number=20;
 let color:number = ff0f;
 let price:number = 10.99;
 --string
 let name:string = "zhangsan";

 1.2 array
 let names:string[] = ["zhangsan","lisi","wangwu"];
 let names:Array<string> = ["zhangsan","lisi","wangwu"];
 let list:any[] = [12,true,"wangwu"];

 1.3 tuple
 let info:[string, number] = ["zhangsan", 20];
 let info:[string,string,number] = ["zhangsan", "male", 20];

1.4 任意值any
let age:any = 30;
let list:any[] = [12,true,"wangwu"];

1.5 enum
enum Days{Sun = 0, Mon = 1, Tue = 2, Wed = 3, Thu = 4, Fri = 5, Sat = 6}
console.log(Days[0]);
console.log(Days['Sun']);

1.6 联合类型union types
let name:string|number|boolean|[] = "zhangsan";
console.log(typeof name)

### 2. function
function add(a:number, b:number):number{
    return a + b;
}

const add = (m:number, n:number):number|string => {
    return m + n;
}
返回值类型自动推断。

//可选参数
const add = (m:number, n:number,p?:number):number|string => {
    return m + n;
}
add(10,20)
add(10,20,30)

//default value
const info = (name:string, age:number = 20):number|string => {
    return `name is ${name}, age is ${age}`;
}
info("zhangsan")
info("zhangsan", 30)

//剩余参数
function push(array:any[], ...items:any[]){
    items.forEach(function(item){
        array.push(item);
    });
    return array;
}

let a:any[] = [];
const arr = push(a, 1,2,3,4);

//override

### 3. class
 3.1 defination, extends
class Animal{
    public name:string;

    constructor(name:string){
        this.name = name;
    }

    sayHi(){
        return `my name is ${this.name}`;
    }

    get _name(){
        return 'jack';
    }

    set _name(value){
        console.log('setter:' + value);
    }
}

let dog = new Animal("zhangsan");

class Cat extends Animal{
    constructor(name){
        super(name);
        consile.log(this.name);
    }

    sayHi(){
        return "Meow" + super.sayHi();
    }
    
}

let c = new Cat("Tom");
console.log(c.sayHi());

3.2 access modifiers(public, private, ptotected)
public by default

3.3 readonly
使用readonly修饰的属性是只读属性，只读属性需要在constructor中初始化。

class Person{
    public readonly name:string;
    public constructor(name:string){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

const p = new Person("Iwen");

3.4 getter/setter

class Person{
    private _name:string;
    public constructor(name:string){
        this._name = name;
    }

    get name():string{
        return this._name;
    }

    set name(name:string){
        this._name=name;
    }
}

const p = new Person("Iwen");
p.name = "iwen"; //调用set方法
console.log(p.name); //调用get方法

#### 3.5. 实例方法 静态方法
class Person{
    private _name:string;
    public constructor(name:string){
        this._name = name;
    }

    get name():string{
        return this._name;
    }

    set name(name:string){
        this._name=name;
    }

    //实例方法
    public sayHello(){
        console.log("say hello");
    }

    //静态方法
    public static sayHi(){
        console.log("say hi");
    }
}

#### 3.6 实例属性，静态属性

class Person{
    //实例属性
    private _name:string;

    //静态属性
    public static age:number = 20;

    public constructor(name:string){
        this._name = name;
    }

    get name():string{
        return this._name;
    }

    set name(name:string){
        this._name=name;
    }
}

use class name to call the static attribute.

### 4. abstract class--模板,用于规范代码
abstract class Animal{
    public name:string
    public constructor(name:string){
        this.name = name;
    }

    abstract makeSound():void;
}

//继承
public class Cat extends Animal{
    constructor(name:string){
        super(name);
    }

    //实现抽象方法
    makeSound():void{
        console.log(this.name + "meow");
    }
}

const c = new Cat("mimi");
c.makeSound();

### 5.interface -- 规范，实现类型检查
interface LabeledValue{
    label:string;
}

#### 5.1 可选参数 option bags

interface SquareConfig{
    color?:string;
    width?:number;
}

function createSquare(config:SquareConfig){
    let newSquare = {
        color:"white",
        area:100
    }
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

createSquare("red", 10);
createSquare("red");
createSquare();

#### 5.2 只读属性 readonly  -- 对象创建的时候赋值，后期不能修改
interface Point{
    readonly x: number;
    readonly y: number;
}

let p1:Point = {10, 20}
修改x,y值的时候报错。

#### 5.3 额外的属性检查

```ts
interface SquareConfig{
    color?:string;
    width?:number;
    //额外参数
    [propName:string]:any;
}

function createSquare(config:SquareConfig){
    console.log(config);
}

createSquare({color"red"});//传入可选参数
createSquare({color:"red", sdf:"hello"}); //传入额外参数
```
#### 5.4 接口函数类型
```ts
interface SearchFunc{
    (source:string, substring:string):void;
}

let mySearch:SearchFunc;

mySearch = function(source:string, substring:string){
    console.log(source, substring);
}

```
#### 5.5 接口类类型
```ts
interface UserInterface{
    job:string;
    sayHello(greeting:string):void;
}

class Teacher implements UserInterface{
    public job:string;
    public name:string;
    public age:number;

    sayHello(greeting:string){
        console.log(greeting);
    }
}

const t = new Teacher("teacher", "zhangsan". 20);
```

#### 5.6 interface implementation
```ts
interface Info{
    name:string;
    age:number;
}

interface Job extends Info{
    job:string;
}

function user(userInfo:Job){
    console.log(userInfo);
}

user({
    name:"zhangsan",
    age:20,
    job:"teacher"
})

```
### 6.泛型Generics
```ts
function createArray(length:number, value:T):Array<T>{
    let result:T[] = [];
    for(let i = 0; i< length;i++){
        result[i] = value;
    }
    return result;
}

const arr = createArray(3,"X");
console.log(arr);
```
由于泛型类型未指定，不能操作类型的方法。
可以使用继承约束泛型的类型，就可以使用对应的类型方法。

### 7.声明合并
```ts
interface Alarm{
    price:number;
}

interface Alarm{
    price:number;
    name:string;
}
//以上完成声明的合并
//同样，class也可以完成声明的合并
```

### 8.namespace
使用namepace分隔文件，可以在不同namespace之间进行调用。
```ts
namespace Animal{
    export interface Animal{

    }
}
```

```ts
namespace AnimalInfo{
    export class Cat implements Animal{

    }
}
```
可以分别编译这些文件，也可以将这些文件编译成一个js文件，引入之后就可以使用。

### 9.module
模块在其自身的作用域里执行，不是全局运行，达到隔离的效果。
使用export导出功能，使用import引入功能。
Animal.ts
```ts
export interface Animal{

}
```
Cat.ts
```ts
import {Animal} from "./Animal.ts"

class Cat implements Animal{

}
```
Dog.ts
```ts
import {Animal} from "./Animal.ts"

class Dog implements Animal{

}
```
模块方式是支持工程化的基础。


### 10. 声明文件 
引用第三方文件的时候，需要引入，保证第三方库的功能。.d.ts结尾的文件。
如果自己内部使用的库需要引入，也需要编写自定义的声明文件。

### 11.tsconfig.json
这是ts的配置文件，当一个目录中有这个文件的时候，就认为这是ts的根目录。




























