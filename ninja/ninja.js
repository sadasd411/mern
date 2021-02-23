export default class ninja{
    constructor(name,health,speed,strength){
        this.name = name;
        this.health =health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`Name ${this.name}`);
    }
    showStats(){
        console.log(`Name ${this.name}, Health ${this.health}, Speed ${this.speed}, Strength ${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}