var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.greet = function () {
        console.log("Hello, I'm ".concat(this.name, "!"));
    };
    return Player;
}());
var mario = new Player();
mario.health = 10;
mario.speed = 10;
mario.name = 'mario';
mario.isRandom = true;
var peach = new Player();
peach.name = 'peach';
peach.health = 10;
peach.speed = 10;
peach.isRandom = true;
mario.greet();
peach.greet();
