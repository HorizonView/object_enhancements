//1

// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

/* Write an ES2015 Version */

function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

//2

let favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

let instructor = {
    firstName: "Colt",
    [favoriteNumber]: 'That is my favorite!'
}

//3
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

let instructor2 = {
    firstName: "Colt",
    sayHi(){return 'Hi';},
    sayBye(){ return this.firstName + " says bye!"}
}

//4 ANIMAL FUNCTION

let createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb](){ return noise }
    }
}