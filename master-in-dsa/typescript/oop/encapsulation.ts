class Player1 {
    private speed: number;
    private health: number;

    setHealth(health: number){
        if(health < 0){
            console.log("Invalid health value, setting to below  0");
            return
        }
         this.health=health
    }
    getHealth(){
        return this.health;
    }
    setSpeed(speed: number){
        this.speed=speed
   }
   getSpeed(){
       return this.speed;
   }
}

const mario1= new Player1();
mario1.setHealth(-3);
mario1.setSpeed(1);

console.log(`mario has speed ${mario1?.getSpeed()}`)
console.log(`mario has health ${mario1?.getHealth()}`)
