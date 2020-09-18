//__________________FIREFLY SPACE-BATTLE___________________________


//_____________________PSUEDOCODE__________________________________

//make aliens, USS Assembly, and game objects
//make properties for aliens and USS Assembly that include: hull,firepower, and accuracy
//make battle object iterate over loop (maybe while loop) for attacks
//maybe make retreat restore hull for USS Assembly?
//use Math.random to find ranges for Alien properties


//__________________PARENT CLASS____________________________

class Spaceship {
    constructor (name, hull, firepower, accuracy) {
        this.name = name,
        this.hull = hull,
        this.firepower = firepower,
        this.accuracy  = accuracy
    }
};


//___________________ALIENS_____________________________________

class Aliens extends Spaceship { 
    constructor(name, hull, firepower, accuracy){
        super (name, hull, firepower, accuracy)
        this.hull = Math.floor(Math.random()*((6 - 3) +1)) + 3,
        this.firepower = Math.floor(Math.random()*((4 - 2) +1)) + 2,
        this.accuracy = (Math.random()*(.8 - .6) + .6)
    }
    greet() {
        console.log('Greetings Earthling!!! Prepare to DIE!')
    }
    attack1(military1) {
        military1.hull -= alien1.firepower
    }
};

const alien1 = new Aliens ('UNO'); 
const alien2 = new Aliens ('DOS');
const alien3 = new Aliens ('TRES');
const alien4 = new Aliens ('QUATRO');
const alien5 = new Aliens ('CINCO');
const alien6 = new Aliens ('SEIS');


//__________________USS ASSEMBLY______________________________________

class Military extends Spaceship {
    constructor(name, hull, firepower, accuracy) {
        super (name, hull, firepower, accuracy)
    }
    attack1(alien1) {
        alien1.hull -= military1.firepower
    }
    greet() {
        console.log('You don\'t know who you\'r messing with!!!!')
    }

};

const military1 = new Military ('USS Assembly', 20, 5, .7)


//_____________________ATTACK ATTACK ATTACK______________________________

alien1.greet()
military1.greet()

while (military1.hull > 0 && alien1.hull > 0) {
    military1.attack1(alien1);
    console.log(`${military1.name} ATTACKS ${alien1.name}`);
    alien1.attack1(military1);
    console.log(`${alien1.name} ATTACKS ${military1.name}`);
}

alien2.greet()
military1.greet()

while (military1.hull > 0 && alien2.hull > 0) {
    military1.attack1(alien2);
    console.log(`${military1.name} ATTACKS ${alien2.name}`);
    alien1.attack1(military1);
    console.log(`${alien2.name} ATTACKS ${military1.name}`);
}

alien3.greet()
military1.greet()

while (military1.hull > 0 && alien3.hull > 0) {
    military1.attack1(alien3);
    console.log(`${military1.name} ATTACKS ${alien3.name}`);
    alien3.attack1(military1);
    console.log(`${alien3.name} ATTACKS ${military1.name}`);
}

alien4.greet()
military1.greet()

while (military1.hull > 0 && alien4.hull > 0) {
    military1.attack1(alien4);
    console.log(`${military1.name} ATTACKS ${alien4.name}`);
    alien4.attack1(military1);
    console.log(`${alien4.name} ATTACKS ${military1.name}`);
}

alien5.greet()
military1.greet()

while (military1.hull > 0 && alien5.hull > 0) {
    military1.attack1(alien5);
    console.log(`${military1.name} ATTACKS ${alien5.name}`);
    alien5.attack1(military1);
    console.log(`${alien5.name} ATTACKS ${military1.name}`);
}

alien6.greet()
military1.greet()

while (military1.hull > 0 && alien6.hull > 0) {
    military1.attack1(alien6);
    console.log(`${military1.name} ATTACKS ${alien6.name}`);
    alien6.attack1(military1);
    console.log(`${alien6.name} ATTACKS ${military1.name}`);
}

