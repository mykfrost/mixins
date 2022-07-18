function mixin (target , ...sources){
    Object.assign(target,...sources );
}

const canEat = {

    eat: function(){
        this.hunger--;
        console.log('eating')
    }
};

//Implementation using empty objects
const canWalk = {
    walk: function(){
        console.log('walking');
    }
};

const canSwim = {
    swim: function(){
        console.log('Nigga Can Swim');
    }
}
const person = Object.assign({}, canEat, canWalk);
console.log('Object Implementation',person);
//Implemetation usinig constructor fucntion

function Person(){}
mixin(Person.prototype, canEat , canWalk);

const person2 = new Person();

console.log('Person Two',person2);

//New constructor function

function Goldfish(){}
Object.assign(Goldfish.prototype, canSwim,canEat);

const goldfish = new Goldfish();
console.log('Goldfish', goldfish);