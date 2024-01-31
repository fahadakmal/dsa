 //Code Duplication -- Code duplication makes our code very error prone
 //Flexibility -- 

 class Animal1 {
    health:number
    name:number
    protected coordX: number
    protected coordY: number

    setCoordX (x: number){
        this.coordX=x;
    }

    setCoordY (y: number){
        this.coordY = y;
    }

    move(){
        console.log(`${this.name} is moving`)
    }

    sleep(){
        console.log(`${this.name} is sleeping`)
    }

    eat(){
        console.log(`${this.name} is eating`)
    }

    makeNoise(){
        console.log("The animal made a noise")
    }
 }

 class Canine extends Animal1 {
    makeNoise(): void {
        console.log('am cannine')
        super.makeNoise();
    }
 }

 class Dog1 extends Canine {
    owner:string;

    returnToOwner(){
        console.log(`Returning to ${this.owner}`)
    }
 }

 class Wolf extends Canine {

 }

 const dog1 = new Dog1();
 dog1.makeNoise()

