
class Hamster {
    constructor(owner, name = '', price = 15) {
        this.owner = owner;
        this.name = name;
        this.price = price;
    }
    wheelRun() {
        console.log('squeek squeek')
    }
    eatFood() {
        console.log('nibble nibble')
    }
    getPrice() {
        return this.price
    }
}

// const furry = new Hamster('Sam', 'Furry',)
// console.log(furry);
// const

// ==================================================================================

class Person {
    constructor(name = 'Ronnie', age, height, weight, mood = 0, hamsters = [], bankAccount = 0){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAccount = bankAccount;
        this.greet = '';
        this.eat = eat;
        this.exercise = exercise;
        this.ageUp = ageUp;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log();
    }
    eat() {
        this.weight++;
        this.mood++;
    }
    eatXTimes(num) {
        this.weight += num
    }
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount+=10;
    }
    buyHamster() {
        Hamster.push();
        this.mood+=10;
        this.bankAccount+=this.hamsters.getPrice();
    }

} //console.log(Person);

