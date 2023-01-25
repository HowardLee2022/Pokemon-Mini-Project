const trainer = require("./lib/Trainer");

const pokemon = require("./lib/Pokemon");

const inquirer = require("inquirer");



const trainers =[];

const start = () => {
    inquirer.prompt([
    {
        type:"list",
        name:"choices",
        message:"What do you want to do?",
        choices:["Add Trainier", "Add Pokemon", "Random Pokemon", "Quit"]
    }])
    .then((response) => {
        if(response.choices== "Add Trainier"){
            addTrainier();
        }else if(response.choices == "Add Pokemon"){
            addPokemon();
        }else if(response.choices =="Random Pokemon"){
            randomPokemon();
        }else{
            return
        }
        })
    }


const addTrainier = () => {
    inquirer.prompt([
        {   
            type:"input",
            name:"trainer",
            message:"What is your trainer name?"
        },
        
    ]).then( (response) => {
        response.trainer = new trainer(response.trainer);
        trainers.push(response.trainier);
    })
    start();
}

const addPokemon = () => {
    inquirer.prompt([
        {
            type:"list",
            name:"name",
            message:"Choose Trainier",
            choices:trainers
        },
        {
            type:"input",
            name:"name",
            message:"what is the name of pokemon"
        },
        {
            type:"input",
            name:"hp",
            message:"What is the pokemons Hitpoints?"
        },
        {
            type:"input",
            name:"strength",
            message:"What is your pokemon strength"
        }
    ]).then((response)=> {
        trainiers.
        trainier
    })
    }

start();