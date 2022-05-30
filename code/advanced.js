/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */


unitedKingdom = [
    {
        name: "Scotland",
        capital: "Edinburgh",
        population: 5454000,
        touristAttractions: [
            "Stirling Castle",
            "Loch Ness"
        ]
    },
    {
        name: "England",
        capital: "London",
        population: 55980000
    },
    {
        name: "Wales",
        capital: "Swansea",
        population: 3163000,
        touristAttractions: [
            "Snowdonia"
        ]
    },
    {
        name: "Northern Ireland",
        capital: "Belfast",
        population: 1885000,
        touristAttractions: [
            "Titanic Museum",
            "Giant's Causeway"
        ]
    }
]


/**
 * Q1. Add some tourist attractions to England
 */

for (let i = 0; i< unitedKingdom.length; i++) {
    if (unitedKingdom[i].name == "England"){
        unitedKingdom[i].touristAttractions = [ "Big Ben", "Windsor Castle"];
        england = unitedKingdom[i];
    }
}

console.log(england);





/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

for (let i = 0; i< unitedKingdom.length; i++) {
    if (unitedKingdom[i].name == "Wales"){
    unitedKingdom[i].capital = "Cardiff";
    wales = unitedKingdom[i];
    }
}

console.log(wales);




/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

for (let i = 0; i< unitedKingdom.length; i++) {
    if (unitedKingdom[i].name == "Northern Ireland"){
        northernIrelandKeys = Object.keys(unitedKingdom[i]);
    }
}


console.log(northernIrelandKeys);



/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

populations = [];
for (let i = 0; i< unitedKingdom.length; i++){
    if (unitedKingdom[i].name == "Scotland"){
        scotlandPop = unitedKingdom[i].population;
    }
    else {
        populations.push(unitedKingdom[i].population)
    }
}
populations.sort();

if (scotlandPop > populations[populations.length -1]){
    console.log("Scotland has the largest population")
}
else if (scotlandPop < populations[0]){
    console.log("Scotland has the smalled population")
}
else{ 
    console.log("Scotland has a population somehwere in the middle")
}
