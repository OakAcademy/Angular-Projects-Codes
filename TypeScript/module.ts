import {Car} from './Car'

let car= new Car('BMW','BMW2','red',2019);
console.log(car.brand+' '+ car.color);

let car2=new Car('Mercedes','GLC','black',2020);
console.log(car2.model+' '+ car2.yearManufacture)


class Person{ 

   protected name:string;

    email:string;
   

   get mail(){

       return this.email;
   }
   set mail(email){

       this.email=email;
   }

   save(){
       console.log('Registration Successful');
   }

}


class Customer extends Person{ 

   sale(){

       this.name;
       console.log('x items sold');
   }

}


class Employee extends Person{ 

   salary(){
       console.log('Salary Paid');
   }

}

let person= new Person;
person.save;


let customer= new Customer;
customer.sale;

customer.mail;


let employee=new Employee;
employee.salary;
employee.save;