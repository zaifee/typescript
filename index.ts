
//Annotation

// Strings
// let myName : string = "Mohd Nawaz";
// myName = 'abc'
// console.log(myName);

//Numbers
// let favNumb : number = 123;
// console.log(favNumb);

// boolean 
// let notTrue : boolean = false;


// Inferring in typescript  
// let tech = 'typescirpt';
// let favNumb = 12;
// let tsHard = true;
// console.log(typeof tech, typeof favNumb, typeof tsHard);


// //any type 
// let colors : any = "blue";
// colors = 123;
// console.log(colors);

//------function parameter annotations

// function addOne(num: number){
//     return num + 1;
// }
// const res = addOne(3);
// console.log(res);


// //Arrow functions 
// const addTwo = (x: number, y: number) =>  x* y;
// const ans = addTwo(2, 3);
// console.log('Multi', ans);


//regular function 
// function greet(name : string) : string {
//     return(`Hello ${name}`);
    
// }

// const res = greet("Nawaz");
// console.log(res);

//Arrow function 
// const greet = (name: string) : string => { return(`Hello ${name}`) }
// console.log(greet("Mohd Nawaz"));

//void is used as a return type 
// function printMessage(message: string) : void {
//     console.log(`This is my message ${message}`);
// }

// printMessage("message");


// error throwing with never
// function throwError(msg: string) : never {
//     throw new Error(msg);
    
// }

// let x : never;

// // infinite loop with never 
// function neverReturns() : never {
//     while(true) {}
// }

// x : neverReturns();

// arrays in typescript 
// const numbers : number[] = [1,2, 3, 4];
// console.log(numbers)

// Array<type>  
// const nums : Array<number> = [1, 2, 3, 4];
// console.log(nums);

// const items: string[] = [];
// items.push("keyboard");
// console.log(items);


// --------- Multi-Dimensional array---------------
// const singleDi : number[] = [1, 2, 3,4];
// const doubleDi : number[][] = [[1, 2, 3, 5]];
// const tripledi : number[][][] = [[[1, 2, 3, 4]]];

// console.log(singleDi);
// console.log(doubleDi);
// console.log(tripledi);

// factory function in ts 
// const person : {firstName: string; lastName: string; age: number} = {
//     firstName: "John",
//     lastName: "Dow",
//     age: 23
// }
// console.log(`Your firstName ${person.firstName} and lastName ${person.lastName} and age is ${person.age}`);

// function printUser() : {firstName: string; lastName: string, age: number} {
//     return {
//         firstName: "Nawaz",
//         lastName: "Qureshi",
//         age: 23
// }
// }

// const res = printUser();
// console.log(res);



// type-aliases in TS 
/*
type person = 
{
    firstName : string; 
    lastName: string; 
    age: number
};

const printUserInfo = (user: person) => {
    return  `firstName: (${user.firstName}), lastName: (${user.lastName}) and age (${user.age})`
}

const res = printUserInfo({firstName: "Mohd", lastName: "Nawaz", age: 23})
console.log(res);
*/

// -------Optional property in TS ------------
// type User = {
//     name: string,
//     age: number,
//    readonly location?: string
// }
// const alice: User ={
//     name: "Mohd Nawaz",
//     age: 20

// }
// console.log(`Name: ${alice.name} and ${alice.age}`);

// ------------------Intersection type in TS ---------------
// type Person = {
//     name: string,
//     age: number;
// }
// type Employee = {
//     id: number,
//     designation: string
// }

// type PersonAndEmployee = Person & Employee; 

// const Emp1 : PersonAndEmployee = {
//     name: "Mohd",
//     age: 23,
//     id: 1,
//     designation: "JR. Software Developer"
// }

// console.log(`Your details are: Name: ${Emp1.name}, Age: ${Emp1.age},Office id: ${Emp1.id},and Designation: ${Emp1.designation}`);


// Unions in TS  -> Denoted by |
/*
let password : string | number = 123;

type UserInfo = {
    firstname: string,
    lastname: string,
    phoneNumb: number,
    marriedStatus: string,
    address: string,
};

type AccountDetails = {
    email: string
    password: string
};

let User : UserInfo | AccountDetails = {
    firstname: "John",
    email: "nawazthezaifregmailcom",
    password: "1234"

}
// Union example in array 
const items : (number | string)[] = [1,2, 3, "hello"];
console.log(items);
*/

// literals in TS -- only given values can be assignable 
// let colors : "yellow" | "green";
// colors = "yellow";


//tuples in ts 

let myTuples : [string, number] = ["hello", 123456];
myTuples = ["something", 65757];
//destructuring
const [firstValue , secondValue] = myTuples;
console.log(`first Value ${firstValue} and SecondValue is ${secondValue}`);


//enums in ts 
// enum WeatherConditions {
//    "Sunn",
//    "rainigy"
// }

// enum WeatherConditions {
//     Sunny = "Sunny",
//     rain = "rainny",
//     auti = "Autumn"
// }

// console.log(`current weather is ${WeatherConditions.auti}`)

//Classes in typescript 
// class Person {
//     name : string;
//     age: number;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }


// }

// const p1 = new Person("Mohd", 12);
// console.log(p1);

// Access Modifier in TS 
/*
class Human {
   public firstName : string;
   private lastName: string;
   protected age: number;

   constructor(firstName: string, lastName: string, age: number){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
   }

   getName() : string {
    return `${this.firstName} ${this.lastName} ${this.age}`
   }

}
const p1 = new Human("Mohd", "Nawaz", 20);
p1.firstName = "Zaifre";
p1.getName();
console.log(p1);


class Person extends Human {
    constructor(firstName: string, lastName: string, age: number){
        super(firstName, lastName, age);
    }
}

const p2 = new Person("Mohd", "Nawaz", 20);
console.log(p2);

// getter and setter in Ts
class MyClass{
    private _myProperty : number = 0;

    get myProperty(): number{
        return this._myProperty;
    }

    set myProperty(value: number){
        this._myProperty = value;
    }
}

const myInstance = new MyClass();
console.log(`Current value: ${myInstance.myProperty}`);
myInstance.myProperty = 20;
console.log(`Current value: ${myInstance.myProperty}`);


*/

// Interfaces in TS 
interface Person{
    firstName: string,
    lastName: string,
    age: number;
}

const examplePerson : Person = {
    firstName: "Mohd",
    lastName: "Nawaz",
    age: 23
}
console.log(examplePerson.lastName);

//More exmaples 
interface movie{
   readonly name: string;
   rating: number;
   genra? : string;
}

// const movie1 : movie = {
//     name: "star wars",
//     rating: 4.5,
//     genra: "action"
// }

// console.log(`Your selected movie is: ${movie1.name} and its rating ${movie1.rating}`);

// Interface with functions 
interface MathOperation{
    (x : number, y: number) : number
}

const add : MathOperation = (a, b)  => a + b;
const subt : MathOperation = (a, b) => a - b;
console.log(add(2, 3));
console.log(subt(3, 2));


interface Song{
    songName: string,
    singerName: string,
    printSongInfo(songName: string, singerName: string) : string;
}

const song1 : Song = {
    songName : "natural",
    singerName: "Malaika Sharawat",
    printSongInfo: (songName, singerName) => {
        return `Song : ${songName}, Singer: ${singerName}`;
    }
}

console.log(song1.printSongInfo("Sayyara", "Don'tKnow"));

// ---------Interface with Methods -----------
interface MovieDetails{
    name: string,
    rating: number,
    printMovieInfo(name: string, rating: number) : string | number;
}

interface MovieGenra extends MovieDetails{
    genra : string
}

const movie1 : MovieGenra = {
    name: "Star wars",
    rating: 3,
    genra: "action",
    printMovieInfo(
        name: string,
        rating: number,

    ) : string | number {
        return `Movie name: ${name} Price: ${rating}`
    }
}

const res1 = movie1.printMovieInfo("sayyara", 9.6)
console.log(res1);

// --- Interface with classes--------
interface Car{
    start() : void,
    stop() : void
}

class Car implements Car{
    start(): void {
        console.log(`Car is started`);
    }
    stop() : void {
        console.log(`Car is stopped`);
    }
}

const myCar = new Car();
myCar.start();  

//Declaration merging in typescript 
interface Car{
    brand: string,
    start() : void
}

//declaration merging 
interface Car{
    model: string,
    stop(): void
}

const myGadi : Car = {
    brand: "BMW",
    model: "m3",

    start(){
        console.log("Start");
    }, 

    stop(){
        console.log("Stopped");
        
    }
} 

myGadi.start();

// Generic in TypeScript -- why we need generic becuase while passing argument we have to pass 
function printNumber(item: number, defaultValue: number) : [number, number] {
    return [item, defaultValue];
}
function printString(item: string, defaultValue: number) : [string, number] {
    return [item, defaultValue];
}



const ans = printNumber(2, 3);
// const ansString = printString(2, 4); 
console.log('----',ans);

// generic 
function uniqueDataTypeFunc<T> (
    item: T,
    defaultValue: T
) : [T, T] {
    return [item, defaultValue];

}

// const numb = uniqueDataTypeFunc<number>(10, 20);
// const str = uniqueDataTypeFunc<string>("Mohd", "Nawaz");
// console.log(`Numbers: ${numb}`);
// console.log(`Strings are: ${str}`);
// interface Dog{
//     name: string,
//     breed: string
// }

// const dog1 = uniqueDataTypeFunc<Dog>(
//     {name: "dogo1", breed: "masterBreed"},
//     {name: "dogo2", breed: "master1Breed"}
// );

// console.log(dog1);


// //example 2
function generateRandomKey<T>(obj: {[key: string] : T} ): {
    key: String,
    value: T
}{
    const keys = Object.keys(obj);
    console.log('-----------',keys);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return ({key: randomKey, value: obj[randomKey]});
}

const stringObj = {a : "apple", b : "Mango", c : "cherry"};
const randomStringPair = generateRandomKey<string>(stringObj);
console.log(`RandomString Pair ${JSON.stringify(randomStringPair)}`);

//for numbers obj j
const numbObj  = {one: 1, two: 2, three: 3};
const randomNumbPair = generateRandomKey<number>(numbObj);
console.log(`----------${JSON.stringify(randomNumbPair)}`);


//filter array based on specific condition 
function filterArray<T>(array: T[], condition: (item: T) => boolean) : T[] {
    return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4, 5];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers);

const stringArray = ["apple", "banana", "mango", "pineapple"];
const shortWords = filterArray<string>(stringArray, (word) => word.length < 6);
console.log(shortWords);

//with interface 
interface fruits{
    name: string,
    color: string
}

const fruitsArray: fruits[] = [
    {name: "apple", color: "Red"},
    {name: "mango", color: "Yellow"},
    {name: "Cherry", color: "Red"}
]

const redFruites = filterArray<fruits>(fruitsArray, (fruit) => fruit.color === "Red");
console.log(redFruites);

function reversePair<T, U>(value1: T, value2: U) : [U, T] {
    return [value2, value1];
}

const reversePairAns = reversePair("hello", 12);
console.log(reversePairAns);

//Generic classes 
class Box<T> {
    private content : T;

    constructor(initialValue : T) {
        this.content = initialValue;
    }

    getContent() : T{
        return this.content;
    }

    setContent(newContent: T) : void{
        this.content = newContent;
    }
}
const stringBox = new Box<string>("Hello, TypeScript");
console.log(stringBox.getContent());

stringBox.setContent("New Content Added to the Course");
console.log(stringBox.getContent());

//for number 
const numberBox = new Box<number>(20);
console.log(numberBox.getContent());
numberBox.setContent(30);
console.log(numberBox.getContent());


//TypeGuard in typescript
type MyType = string | number;

function myExample(value : MyType) : void{

    //type gurad with typeof operator 
    if(typeof value === "string"){
        console.log(value.toUpperCase());   
    }
    else{
        console.log(value.toFixed(2)); //here ts knows value is a number
        
    }
}

// myExample("hello typescript");
myExample(123)

class Dog{
    bark() : void{
        console.log("Woaf");
        
    }
}

class Meow{
    meow() : void{
        console.log("meow");
    }
}

function animalSound(animal: Dog | Meow) : void{
    if(animal instanceof Dog){
        animal.bark();
    }
    else{
        animal.meow();
    }
}

const dogo1 = new Dog();
const meow1 = new Meow();
animalSound(dogo1);




























