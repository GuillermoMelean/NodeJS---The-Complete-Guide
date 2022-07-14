let name = 'Guillermo'; // <--- string
let age = 25; // <--- number
let hasHobbies = true; // <--- boolean

const sumarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is ' + userName +
        ", age is " + userAge +
        ' and the user has hobbies: ' + userHasHobby)
}

console.log(sumarizeUser(name, age, hasHobbies));