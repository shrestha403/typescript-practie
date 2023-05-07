// let num=10
// if(num<10){
//     num+=10;

// }else{
//     num=num+20
// }
// console.log(num);

// types in typescript

//anytype
let a;
a=10;
a="number";
console.log(a);


let b=10;
// b="number"; invalide

function add(a:number,b:number){
    return a+b;
}
console.log(add(10,20));

//arrays
let numbers:number[]=[];
let datas=[1,2,3.3];

datas.forEach(n=>{
    n.toFixed(2)
})

//tuples 
//fixed sized array with different data types
let fxarr:[number,string]=[1,"string"];

//enumtypes 
// enum size {small,medium,large};

//more optimized enum types 
const  enum size {small,medium,large}; // initilaization with 0,1,2
const  enum xsize {small='s',medium="m",large="m"}; // initilaization with 0,1,2




let mySize=xsize.medium;
console.log(mySize);


// functions in ts
function calculateTax(income:number,year=2022):number{
    if(year==2022)
        return income*1.3;
    return income*1.2;
}

console.log(calculateTax(50000,2018));
console.log(calculateTax(50000,2022))
console.log(calculateTax(50000));


// objects in ts
let user:{
  readonly  id:number,
    name:string,
    password:string
    images?:string
}={
 id:1,
    name:"jagadish",
    password:"123"
}

// user.id=10; returns err
user.name="shrestha"
// user.lastName="shrestha"; returns err

//Advance types

//type alias
type User={
    readonly  id:number,
    name:string,
    password:string
    images?:string
};

let user1:User={
    id:1,
    name:"jagadish",
    password:"Abc",
    images:"www.images.com"
}
 
// union types
function kmtom(value:number | string):number{
    if(typeof value==="number")
        return value*1000;
    else
        return parseInt(value)*1000;
}

console.log(kmtom(5));
console.log(kmtom("6"));

//intersection types
type Dragabble={
    drag:()=>void
}

type Widget={
    element:()=>void
}
// intersection of two alias type which contain properties of both types
type UIWidget=Dragabble & Widget;

let newElement:UIWidget={
    drag:()=>{},
    element:()=>{}
}

// literal types
type Quantity=50 |100 |500;

let myQuantity:Quantity=500;
// let myQuantity:Quantity=500; // returns eerr

// passing null and undefined as parameter
function printName(name:String | null | undefined):void{
    if(name){
        console.log(name);
        
    }else{
        console.log("invalid");
        
    }
}

printName("jagadish");
printName(null);
printName(undefined);


// optional chainging
console.log(user?.images);

interface Person {
    name: string;
  }
  
  interface Person {
    age: number;
  }
  
  const person: Person = { name: 'Alice', age: 30 }; // okay
  
  function throwError(errorMsg: string): never { 
    throw new Error(errorMsg); 
} 

function keepProcessing(): never { 
    while (true) { 
 console.log('I always does something and never ends.')
}
}


// keepProcessing();

// function overloading in typescript
// the number of parameters must be same for function overloading with different data types 
// must have multiple declaration and one function implementation with compatible type

function adding(a:number,b:number):number;
function adding(a:string,b:string):string;

function adding(a:any,d:any):any{
    return a+d;
}

console.log(adding(50,60));
console.log(adding("jagadihs","shrestha"));





