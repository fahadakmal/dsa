//Inheritance
// 1. remove code duplication
// 2. providing a common protocol for a group of sub classes

class Hero {
    hunger: number
    health: number

    attack(){
        console.log("I am attacking")
    }
    move(){
        console.log("I am moving")
    }
    eat(){
        console.log("I am eating")
    }
}

class Archer extends Hero {
    arrows:number

    attack(){
        super.attack();
        console.log("I am a archer")
        this.arrows-=1
    }

}

class Mage extends Hero {
  mana: number

  attack(){
    super.attack()
    console.log("Throwing a portion")
    this.mana-=1;
  }
}

class Knight extends Hero{
    shield:number

    attack(): void {
        super.attack();
        console.log("I am swinging with a sword")
    }
}

const mage: Hero = new Mage();
const archer: Hero = new Archer()
const knight: Hero= new Knight();

class Tribe {
    private heroes: Hero[]

    setHeros(heros: Hero[]){
         this.heroes=heros;
    }

    attack (){
        for (let hero of this.heroes){
            hero.attack()
        }
    }
}

const heros: Hero[]=[archer,mage,knight];
const tribe= new Tribe();
tribe.setHeros(heros)
tribe.attack()

class Thief extends Hero {
    attack(): void {
        super.attack();
        console.log('I steal your stuff');
    }
}

const thief= new Thief();

const heros1: Hero[]= [thief,archer,mage]
const tribe2=new Tribe();
tribe2.setHeros(heros1)
tribe2.attack()

class Wizard extends Mage {}
class Witch extends Mage{}
const wizard: Hero = new Wizard();