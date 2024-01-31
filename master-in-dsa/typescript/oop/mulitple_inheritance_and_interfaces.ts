abstract class Character {
    hunger:number
    health:number

    abstract eat():void;
}

interface Hero4 extends Character {
    heroId:number;
}

interface Enemy extends Character {
    enemyId:number;
}

//Spy IS-A hero , Spy IS-A enemy
class Spy implements Hero4,Enemy {

    hunger: number;
    health: number;
    heroId: number;
    enemyId: number;
    eat(): void {
        console.log("The spy is eating.");
    }
}

const her:Hero4= new Spy();
const enemy:Enemy= new Spy();

//basic classes
//subclasses
//abstract classes
//interfaces

//IS-A 
class Character1{}

//subclasses
class Knight12 extends Character1{}
class Archar1  extends Character1{}

//abstract classes
abstract  class Mage32 extends Character1{}
class Wizards extends Mage32{}
class Witch32 extends Mage32{}

//interfaces
//multiple inheritance 
interface Hero1 extends Character1{}
interface Enemy1 extends Character1{}
class Spy1 implements Hero1,Enemy1{

}



