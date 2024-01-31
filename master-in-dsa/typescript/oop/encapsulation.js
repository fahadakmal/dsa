var Player1 = /** @class */ (function () {
    function Player1() {
    }
    Player1.prototype.setHealth = function (health) {
        if (health < 0) {
            console.log("Invalid health value, setting to below  0");
            return;
        }
        this.health = health;
    };
    Player1.prototype.getHealth = function () {
        return this.health;
    };
    Player1.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Player1.prototype.getSpeed = function () {
        return this.speed;
    };
    return Player1;
}());
var mario1 = new Player1();
mario1.setHealth(-3);
mario1.setSpeed(1);
console.log("mario has speed ".concat(mario1 === null || mario1 === void 0 ? void 0 : mario1.getSpeed()));
console.log("mario has health ".concat(mario1 === null || mario1 === void 0 ? void 0 : mario1.getHealth()));
