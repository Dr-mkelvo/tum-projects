const students = {
    name: "Mkelvo",
    age: 20,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const {name, age, projects : { diceGame}} = students

let myDetails = `my name is ${name}, aged ${age} years and I'm building ${diceGame}`
console.log(myDetails) 