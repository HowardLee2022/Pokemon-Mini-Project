class Pokemon {
   constructor(name, hp, atk,){
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.level = 1
   }
}

const squirtle = new Pokemon("squirtle", 100, 50);
console.log(squirtle);

module.exports = Pokemon