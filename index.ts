
//Annotation

// Strings
let myName : string = "Mohd Nawaz";
myName = 'abc'
console.log(myName);

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
const greet = (name: string) : string => { return(`Hello ${name}`) }
console.log(greet("Mohd Nawaz"));

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
const singleDi : number[] = [1, 2, 3,4];
const doubleDi : number[][] = [[1, 2, 3, 5]];
const tripledi : number[][][] = [[[1, 2, 3, 4]]];

console.log(singleDi);
console.log(doubleDi);
console.log(tripledi);






