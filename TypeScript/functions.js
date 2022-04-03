function getSum(x, y, z) {
    return x + y + z;
}
getSum('hi', 5, 3);
function getSum2(x, y, z) {
    return x + y + z;
}
getSum2(4, 5, 3);
var getSum3 = function (x, y, z) {
    return x + y + z;
};
function getSum4(x, y, z) {
    return x + y;
    count = 2;
    if (typeof z !== 'undefined') {
        return x + y + z;
        count++;
    }
}
console.log(getSum4(3, 4, 5));
function getSum5(x, y, z) {
    if (z === void 0) { z = 5; }
    return x + y + z;
}
getSum5(3, 4, 8);
function getAverage() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < x.length; i++) {
        total += x[i];
        count++;
    }
    var result = total / count;
    return result;
}
getAverage(10, 20);
getAverage(10, 20, 30);
getAverage(10, 20, 40, 50);
getAverage(10, 20, 40, 50, 60);
