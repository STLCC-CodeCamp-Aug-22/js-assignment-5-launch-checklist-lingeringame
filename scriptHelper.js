// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput === "") {
        return "Empty";
       }
       if(!isNaN(testInput)) {
        return "Is a Number"; 
       } else {
        return "Not a Number";
    }
}

function formSubmission(event, document, list, pilot, copilot, fuelLevel, cargoLevel) {
        pilotInpResult = validateInput(pilot.value);
        copilotInpResult = validateInput(copilot.value);
        fuelInpResult = validateInput(fuelLevel.value);
        cargoInpResult = validateInput(cargoLevel.value);
        if(pilotInpResult !== "Not a Number") {
            alert("Pilot must be a string.");
            event.preventDefault();
        }
        if(copilotInpResult !== "Not a Number") {
            alert("Co-pilot must be a string.");
            event.preventDefault();
        }
        if(fuelInpResult !== "Is a Number") {
            alert("Fuel level must be a number.");
            event.preventDefault();
        }
        if(cargoInpResult !== "Is a Number") {
            alert("Cargo level must be a number.");
            event.preventDefault();
        }

        
        console.log(pilotInpResult);
        console.log(copilotInpResult);
        console.log(fuelInpResult);
        console.log(cargoInpResult);
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
