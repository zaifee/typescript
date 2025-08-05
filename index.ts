
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



















