//Inheritance
// 1. remove code duplication
// 2. providing a common protocol for a group of sub classes
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
var Hero2 = /** @class */ (function () {
    function Hero2() {
    }
    Hero2.prototype.move = function () {
        console.log("I am moving");
    };
    Hero2.prototype.eat = function () {
        console.log("I am eating");
    };
    return Hero2;
}());
var Archer1 = /** @class */ (function (_super) {
    __extends(Archer1, _super);
    function Archer1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Archer1.prototype.attack = function () {
        console.log("I am swinging with a sword");
    };
    return Archer1;
}(Hero2));
var Knight1 = /** @class */ (function (_super) {
    __extends(Knight1, _super);
    function Knight1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Knight1.prototype.attack = function () {
        console.log("I am swinging with a sword");
    };
    return Knight1;
}(Hero2));
var knight1 = new Knight1();
var archer1 = new Archer1();
var Mage2 = /** @class */ (function (_super) {
    __extends(Mage2, _super);
    function Mage2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mage2;
}(Hero2));
var Wizard4 = /** @class */ (function (_super) {
    __extends(Wizard4, _super);
    function Wizard4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wizard4.prototype.attack = function () {
        this.mana -= 50;
        console.log(" wizard attack");
    };
    return Wizard4;
}(Mage2));
var Witch4 = /** @class */ (function (_super) {
    __extends(Witch4, _super);
    function Witch4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Witch4.prototype.attack = function () {
        this.mana -= 50;
        console.log(" witch attack");
    };
    return Witch4;
}(Mage2));
var witch3 = new Witch4;
var wizard4 = new Wizard4();
wizard4.attack();
witch3.attack();
