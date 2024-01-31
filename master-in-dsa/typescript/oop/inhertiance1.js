//Code Duplication -- Code duplication makes our code very error prone
//Flexibility -- 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    Animal1.prototype.setCoordX = function (x) {
        this.coordX = x;
    };
    Animal1.prototype.setCoordY = function (y) {
        this.coordY = y;
    };
    Animal1.prototype.move = function () {
        console.log("".concat(this.name, " is moving"));
    };
    Animal1.prototype.sleep = function () {
        console.log("".concat(this.name, " is sleeping"));
    };
    Animal1.prototype.eat = function () {
        console.log("".concat(this.name, " is eating"));
    };
    Animal1.prototype.makeNoise = function () {
        console.log("The animal made a noise");
    };
    return Animal1;
}());
var Canine = /** @class */ (function (_super) {
    __extends(Canine, _super);
    function Canine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Canine.prototype.makeNoise = function () {
        console.log('am cannine');
        _super.prototype.makeNoise.call(this);
    };
    return Canine;
}(Animal1));
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog1.prototype.returnToOwner = function () {
        console.log("Returning to ".concat(this.owner));
    };
    return Dog1;
}(Canine));
var Wolf = /** @class */ (function (_super) {
    __extends(Wolf, _super);
    function Wolf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Wolf;
}(Canine));
var dog1 = new Dog1();
dog1.makeNoise();
