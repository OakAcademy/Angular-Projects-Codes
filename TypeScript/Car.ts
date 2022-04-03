export class Car{

    brand:string;
   model:string;
   color:string;
   yearManufacture:number;


   constructor(brand:string,model:string,color:string,yearManufacture:number){

       this.brand=brand;
       this.model=model;
       this.color=color;
       this.yearManufacture=yearManufacture;
   }
  

   year(){
       console.log(this.yearManufacture);
   }
}
