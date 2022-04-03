function result(x:number):number{
    return x;
}

let y= result(5)
console.log(y);

function result2(x:string):string{
    return x;
}
let z= result2('Hello')
console.log(result2);


function result3 <T>(x:T):T{

    return x;

}

let t=result3<number>(10);
console.log(t)
let v=result3<string>('Hello');
console.log(v)


class GenericClass<T>{
   variable:T;

   y( parametre: T): T {
     return parametre;
   }

}

let a= new GenericClass<string>()
a.y('5')

