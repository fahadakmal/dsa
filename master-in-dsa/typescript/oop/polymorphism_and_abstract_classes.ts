//Inheritance
// 1. remove code duplication
// 2. providing a common protocol for a group of sub classes

abstract class Hero2 {
    hunger: number
    health: number

    abstract attack():void;
    move(){
        console.log("I am moving")
    }
    eat(){
        console.log("I am eating")
    }

}

class Archer1 extends Hero2 {
    arrows:number
    attack(): void {
        console.log("I am swinging with a sword")
    }
}

class Knight1 extends Hero2{
    shield:number

    attack(): void {
        console.log("I am swinging with a sword")
    }
}

const knight1= new Knight1();
const archer1= new Archer1();

abstract class Mage2 extends Hero2{
    mana:number;
}

class Wizard4 extends Mage2 {
    attack(): void {
        this.mana -=50;
        console.log(" wizard attack")
    }
}

class Witch4 extends Mage2 {
    attack(): void {
        this.mana -=50;
        console.log(" witch attack")
    }
}


const witch3=new Witch4
const wizard4= new Wizard4()
wizard4.attack();
witch3.attack()