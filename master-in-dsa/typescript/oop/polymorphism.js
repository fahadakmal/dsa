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
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.prototype.attack = function () {
        console.log("I am attacking");
    };
    Hero.prototype.move = function () {
        console.log("I am moving");
    };
    Hero.prototype.eat = function () {
        console.log("I am eating");
    };
    return Hero;
}());
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Archer.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("I am a archer");
        this.arrows -= 1;
    };
    return Archer;
}(Hero));
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mage.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("Throwing a portion");
        this.mana -= 1;
    };
    return Mage;
}(Hero));
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Knight.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("I am swinging with a sword");
    };
    return Knight;
}(Hero));
var mage = new Mage();
var archer = new Archer();
var knight = new Knight();
var Tribe = /** @class */ (function () {
    function Tribe() {
    }
    Tribe.prototype.setHeros = function (heros) {
        this.heroes = heros;
    };
    Tribe.prototype.attack = function () {
        for (var _i = 0, _a = this.heroes; _i < _a.length; _i++) {
            var hero = _a[_i];
            hero.attack();
        }
    };
    return Tribe;
}());
var heros = [archer, mage, knight];
var tribe = new Tribe();
tribe.setHeros(heros);
tribe.attack();
var Thief = /** @class */ (function (_super) {
    __extends(Thief, _super);
    function Thief() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Thief.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log('I steal your stuff');
    };
    return Thief;
}(Hero));
var thief = new Thief();
var heros1 = [thief, archer, mage];
var tribe2 = new Tribe();
tribe2.setHeros(heros1);
tribe2.attack();
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Wizard;
}(Mage));
var Witch = /** @class */ (function (_super) {
    __extends(Witch, _super);
    function Witch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Witch;
}(Mage));
var wizard = new Wizard();
