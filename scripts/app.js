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
        console.log('%c Greetings Earthling!!! Prepare to DIE!', 'color: red')
    }
    attack1(enemy) {
        enemy.hull -= this.firepower
    }
};

const names = ['UNO', 'DOS', 'TRES', 'QUATRO', 'CINCO', 'SEIS'];
const ships = [];
for (let i = 0; i < 6; i++) {
    const alien = new Aliens (names[i]);
    ships.push(alien);
}



//__________________USS ASSEMBLY______________________________________

class Military extends Spaceship {
    constructor(name, hull, firepower, accuracy) {
        super (name, hull, firepower, accuracy)
    }
    attack1(enemy) {
        enemy.hull -= military1.firepower
    }
    greet() {
        console.log('%c You don\'t know who you\'r messing with!!!!', 'color: green')
    }
    
};

const military1 = new Military ('USS Assembly', 20, 5, .7)


//_____________________ATTACK ATTACK ATTACK______________________________

function startGame() {
    ships[0].greet()
    military1.greet()

    while(ships.length >= 0){
            military1.attack1(ships[0]);
            console.log(`%c ${military1.name} ATTACKS ${ships[0].name}`, 'color: green');
            ships[0].attack1(military1);
            console.log(`%c ${ships[0].name} ATTACKS ${military1.name}`, 'color: red');
    

        if (military1.hull <= 0 && ships[0].hull > 0) {
            console.log(`%c ${military1.name} HAS BEEN DEFEATED!`, 'color: green');
            console.log(`${ships[0].name} HAS WON THE GAME!`);
            break
        } else if (ships[0].hull <= 0 && military1.hull > 0) {
            console.log(`%c ${ships[0].name} HAS BEEN DEFEATED!`, 'color: red');
            console.log(`%c ${military1.name} HAS WON!`, 'color: green;');
            ships.shift();
            const promptSaying = prompt('Do you want to retreat? Yes or No.');
            if (promptSaying === 'Yes') {
                console.log(`${military1.name} is retreating!!!`)
                console.log(`%c ${ships[0].name} HAS WON!!!`, 'color: red');
                break
        }
    }
        if (military1.hull > 0 && ships.length === 0) {
            console.log('GAME OVER!!! YOU HAVE WON!!!!!')
            return startGame();
            
    }
    }
}

startGame();

 