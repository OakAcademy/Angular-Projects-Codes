function getSum (x,y,z){
    return x+y+z;
}

getSum('hi',5,3);

function getSum2 (x:number,y:number,z:number):number {
    return x+y+z;
}

getSum2(4,5,3)

let getSum3=function(x:number,y:number,z:number):number{

    return x+y+z;
}


// function getSum4 (x:number,y:number,z?:number):number {
//     return x+y;
//     let count=2;
    
 
//     if(typeof z !== 'undefined'){
//         return x+y+z;
//         count++

//     }
// }




// console.log(getSum4(3,4,5));

function getSum5 (x:number,y:number,z:number=5):number {
    return x+y+z;
}

getSum5(3,4,8)

function getAverage(  ...x:number[]):number{


    let total=0;
    let count=0;
    for (let i=0; i<x.length;i++)
    {
        total+=x[i];
        count++;
    }

    const result=total/count;
    return result;
}


getAverage(10,20);
getAverage(10,20,30);
getAverage(10,20,40,50);
getAverage(10,20,40,50,60);

