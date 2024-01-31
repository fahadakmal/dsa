class Player {
    name: string
    health: number
    speed: number
    isRandom: boolean
    crush: Player

    greet(){
        console.log(`Hello, I'm ${this.name}!`)
    }
}
const mario= new Player();
mario.health=10;
mario.speed= 10;
mario.name= 'mario';
mario.isRandom=true;

const peach = new Player();
peach.name = 'peach';
peach.health = 10;
peach.speed = 10;
peach.isRandom = true;

mario.greet();
peach.greet();