let x:string;
x='Hello';

let y:15;

let isCorrect:boolean;
isCorrect=true;
isCorrect=false;

let countries:string[]=['Russia','Germany','Portugal ',];
let numbers:Array<number> =[1,2,3,];
let t:[number,string]=[1, 'Hi']

let a:any;
a=5;
a='Hi';
a=true;

enum Colors {red=5,black,blue=3,yellow};
let red=Colors.red;
let blue=Colors.blue;
let yellow=Colors.yellow;

function greeter(): void {
    console.log('Hello');
    
}


let b:number;
b=5;

class Product{
   
}

let greet;
greet='Hello';

let count= (<string>greet).length;
let count2=(greet as string).length;