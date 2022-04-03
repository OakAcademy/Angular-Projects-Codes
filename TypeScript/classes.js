var Car = /** @class */ (function () {
    function Car(brand, model, color, yearManufacture) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.yearManufacture = yearManufacture;
    }
    Car.prototype.year = function () {
        console.log(this.yearManufacture);
    };
    return Car;
}());
var car = new Car('BMW', 'BMW2', 'red', 2019);
console.log(car.brand + ' ' + car.color);
var car2 = new Car('Mercedes', 'GLC', 'black', 2020);
console.log(car2.model + ' ' + car2.yearManufacture);
car2.year;

