
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

const furry = new Hamster('Sam', 'Furry', 15)
// console.log(furry);
furry.wheelRun();
furry.eatFood();
const price = furry.getPrice();
console.log(furry);

// ==================================================================================

class Person {
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAccount = bankAccount;
        this.greet = '';
        // this.eat = eat;
        // this.exercise = exercise;
        // this.ageUp = ageUp;
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
        console.log(this.weight);
        console.log(this.mood);
    }
    eatXTimes(num) {
        this.weight += num
        console.log
    }
    exercise() {
        this.weight--;
        console.log(this.weight);
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount+=10;
        console.log(this.age);
        console.log(this.height);
        console.log(this.weight);
        console.log(this.mood);
        console.log(this.bankAccount);
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood+=10;
        this.bankAccount -= hamster.getPrice();
        console.log(this.hamsters);
        console.log(this.mood);
        console.log(this.bankAccount);
    }

} //console.log(Person);

const Timmy = new Person('Timmy', 5,);

// let num2 = Timmy.eatXTimes(5);
// console.log(`He ate ${num2} times.`)

for(let i = 1; i <= 5; i++) {
    Timmy.eat()
    console.log(`Ate ${i} times`)
}

for(let i = 1; i <= 5; i++) {
    Timmy.exercise()
    console.log(`he exercised ${i} times`)
}

Timmy.ageUp(9);

// console.log(Timmy);
// Timmy.exercise(5);
// Timmy.ageUp(9);
// Timmy.buyHamster(Gus);
// Timmy.ageUp(15);
// Timmy.eatXTimes(2);
// Timmy.exercise(2);

const Gus = new Hamster('Timmy', 'Gus');

Timmy.buyHamster(Gus);

Timmy.ageUp(15);

for(let i = 1; i <= 2; i++) {
    Timmy.eat()
    console.log(`Timmy ate ${i} times`)
}

for(let i = 1; i <= 2; i++) {
    Timmy.exercise()
    console.log(`and he exercised ${i} times`)
}

// ===============================================================================


class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer,
        this.entree = entree;
        this.dessert = dessert;
    }
    getAppetizer() {
        this.appetizer;
    }
    getEntree() {
        this.entree;
    }
    getDessert() {
        this.dessert;
    }

}

class Chef {

        preparingFood(appetizer, entree, dessert){
            const dinner = new Dinner(appetizer, entree, dessert);
            console.log(dinner)
        }
}

const dinner1 = new Dinner('Mozzarella Sticks','Chicken Wings','Lemon Pie')
console.log(dinner1);

const dinner2 = new Dinner ('', 'Edamame Beans','Shrimp Pad Thai','Thai Iced Tea');
console.log(dinner2);

const dinner3 = new Dinner ('', 'Platano Maduros','Grilled Chicken with Rice and Beans','Flan');
console.log(dinner3);

// console.logchef1.preparingFood('Edamame Beans','Shrimp Pad Thai','Thai Iced Tea');
// chef1.preparingFood('Platano Maduros','Grilled Chicken with Rice and Beans','Flan');

// const dinner1 = new Dinner ('', ');
// const dinner2 = new Dinner ('', 'Edamame Beans','Shrimp Pad Thai','Thai Iced Tea');
// const dinner3 = new Dinner ('', 'Platano Maduros','Grilled Chicken with Rice and Beans','Flan');

// console.log(`The first dinner will be ${dinner1}`);
// console.log(`The next dinner will be ${dinner2}`);
// console.log(`And the last dinner will be ${dinner3}`);