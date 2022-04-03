function result(x) {
    return x;
}
var y = result(5);
console.log(y);
function result2(x) {
    return x;
}
var z = result2('Hello');
console.log(result2);
function result3(x) {
    return x;
}
var t = result3(10);
console.log(t);
var v = result3('Hello');
console.log(v);
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.y = function (parametre) {
        return parametre;
    };
    return GenericClass;
}());
var a = new GenericClass();
a.y('5');
