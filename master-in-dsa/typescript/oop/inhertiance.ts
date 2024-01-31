 //Code Duplication -- Code duplication makes our code very error prone
 //Flexibility -- 

 class Animal {
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

 //Dog is-a animal
 class Dog extends Animal {
    owner: string // Dog HAS-A owner
    makeNoise(): void {
        console.log("Bark")
    }
    returnToOwner(){
        console.log(`I am at ${this.coordX},${this.coordY}, and now ia m returning to owner`);
    }
 }
const dog= new Dog();
dog.setCoordX(10);;
dog.setCoordY(10);

 class Cat extends Animal {}

 const cat= new Cat();
 dog.makeNoise();
 cat.makeNoise();
 dog.returnToOwner();