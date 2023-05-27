const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
//MAP
//Get an array of all names
const namesChar = characters.map(char => char.name)
//Get an array of all heights
const heightChar = characters.map(char => char.height)
//Get an array of objects with just name and height properties
const nameHeight = characters.map(char => {return {'name':char.name, 'height':char.height})
//Get an array of all first names
const firstName = characters.map(char => char.name.split(" ")[0])
//REDUCE
//Get the total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + parseInt(cur.mass), 0);
//Get the total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + parseInt(cur.height), 0)
//Get the total number of characters in all the character names
const totalChars = characters.reduce((acc, cur) => acc + cur.name.length, 0)
//Get the total number of characters by eye color(hint.a map of eye color to count)
const totalNumberOfCharsByEyeColor = characters.reduce((acc, cur) => {acc[cur.eye_color] ? acc[cur.eye_color]++ : acc[cur.eye_color] = 1; return acc}, {})
//FILTER
//Get characters with mass greater than 100
const greateThan100 = characters.filter(character => character.mass > 100)
//Get characters with height less than 200
const lessThan200height = characters.filter(character => character.height < 200)
//Get all male characters
const maleCharacters = characters.filter(character => character.gender == 'male')
//Get all female characters
const femaleChars = characters.filter(char => char.gender == 'female')
//SORT
//Sort by name
const byName = characters.sort((a, b) => a.name < b.name ? 1 : -1)
//Sort by mass
const byMass = characters.sort((a, b) => a.mass - b.mass)
//Sort by height
const byHeight = characters.sort((a, b) => a.height - b.height)
//Sort by genderç
const byGender = characters.sort(a => a.gender == 'female' ? 1 : -1)
//SOME
//Is there at least one male character ?
const hasMale = characters.some(c => c.gender == 'male')
//Is there at least one character with blue eyes ?
const hasBlueEyes = characters.some(c => c.eye_color == 'blue')
//Is there at least one character taller than 200 ?
const isTallerThan200 = characters.some(c => c.height > 200)
//Is there at least one character that has mass less than 50 ?
const isLighterThan50 = characters.some(c =>  c.mass < 50)
//EVERY
//Does every character have blue eyes ?
const everyHasBlueEyes = characters.every(c => c.eye_color == 'blue')
//Does every character have mass more than 40 ?
const everyMassOver40 = characters.every(c => c.mass > 40)
//Is every character shorter than 200 ?
const everyMassLess200 = characters.every(c => c.height < 200)
//Is every character male ?
const everyFemale = characters.every(c => c.gender == 'female')
