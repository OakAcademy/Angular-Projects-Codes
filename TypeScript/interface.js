function save(person) {
    console.log(person.username + ' ' + 'was registrated');
}
save({ username: 'John', email: 'john@gmail.com', password: '123' });
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    return Person2;
}());
var person2 = new Person2;
person2.username;
function save2(person2) {
    console.log(person2.username + ' ' + 'was registrated');
}
save2(person2);
