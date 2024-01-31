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
var LivingBeing = /** @class */ (function () {
    function LivingBeing(health, hunger) {
        LivingBeing.characterCount += 1;
        console.log("i am the character ".concat(LivingBeing.characterCount));
        this.health = health;
        this.hunger = hunger;
    }
    LivingBeing.prototype.getHunger = function () {
        return this.hunger;
    };
    LivingBeing.prototype.getHealth = function () {
        return this.health;
    };
    LivingBeing.characterCount = 0;
    return LivingBeing;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(humanId, health, hunger) {
        var _this = _super.call(this, health, hunger) || this;
        _this.humanId = humanId;
        return _this;
    }
    Human.prototype.getHumanId = function () {
        return this.humanId;
    };
    return Human;
}(LivingBeing));
var jeff8 = new Human(123, 100, 150);
var jeff1 = new Human(123, 100, 150);
var jeff5 = new Human(123, 100, 150);
var jeff3 = new Human(123, 100, 150);
var jeff6 = new Human(123, 100, 150);
console.log(jeff8.getHealth());
console.log(jeff1.getHumanId());
console.log(jeff6.getHunger());
console.log(LivingBeing.characterCount);
// jeff.setHumanId()
// jeff.setHunger()
// jeff.setHealth();
//=================
//implicit parameter 
var HeroParams = /** @class */ (function () {
    function HeroParams(hunger, health) {
        this.hunger = hunger;
        this.health = health;
    }
    return HeroParams;
}());
//static properties //They live on the class instead of the object
