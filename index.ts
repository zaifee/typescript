
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

function addOne(num: number){
    return num + 1;
}
const res = addOne(3);
console.log(res);


//Arrow functions 
const addTwo = (x: number, y: number) =>  x* y;
const ans = addTwo(2, 3);
console.log('Multi', ans);




