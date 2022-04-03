

interface Person{

    username:string;
    password:string;
    email:string;

}

function save ( person :Person){

    console.log(person.username + ' '+ 'was registrated')
}

save ({username:'John',email:'john@gmail.com',password:'123'});


class Person2{

    username:string;
    password:string;
    email:string;

}

let person2= new Person2;
person2.username;

function save2 ( person2 :Person2){

    console.log(person2.username + ' '+ 'was registrated')

}

save2(person2.username='John')