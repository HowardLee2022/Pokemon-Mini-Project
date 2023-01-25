const pokemon = require("./Pokemon");

class Trainer{
    constructor(name){
        this.name = name;
        this.pokemon = [];
    }

    addPokemon(name,hp,atk){
        this.pokemon.push(new pokemon(name,hp,atk));
    }

    getRandomPokemon(){
       return this.pokemon[Math.floor(Math.random()*this.pokemon.length)]
    }
}



module.exports = Trainer