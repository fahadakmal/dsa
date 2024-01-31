class LivingBeing {
    private health:number;
    private hunger:number;
    static characterCount=0;

    constructor(health:number,hunger:number){
          LivingBeing.characterCount+=1;
          console.log(`i am the character ${LivingBeing.characterCount}`)
          this.health=health;
          this.hunger=hunger;
    }
    
    getHunger(){
        return this.hunger;
    }
    getHealth(){
        return this.health;
    }

}




class Human extends LivingBeing{
    readonly humanId: number;
    //readonly means you cannot reset the humanId

    constructor(humanId:number,health:number,hunger:number) {
        super(health,hunger);
        this.humanId=humanId;
    }
    getHumanId(){
        return this.humanId;
    }
}

const jeff8 = new Human(123,100,150);
const jeff1 = new Human(123,100,150);
const jeff5 = new Human(123,100,150);
const jeff3 = new Human(123,100,150);
const jeff6= new Human(123,100,150);

console.log(jeff8.getHealth());
console.log(jeff1.getHumanId());
console.log(jeff6.getHunger());
console.log(LivingBeing.characterCount)

// jeff.setHumanId()
// jeff.setHunger()
// jeff.setHealth();

//=================

//implicit parameter 
class HeroParams{
    constructor(public hunger: number, public health:number){}
}

//static properties //They live on the class instead of the object


