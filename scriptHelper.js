// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById("missionTarget").innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`

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

function isFuelLevelAcceptable(flValue, flStatus) {
    if(flValue < 10000) {
        flStatus.innerHTML = "Not enough fuel for journey. (> 10,000L)";
        flStatus.style.visibility = "visible";
        return false;
    } else {
        flStatus.innerHTML = "Fuel level high enough for launch"
        flStatus.style.visibility = "visible";
        return true;
    }
}

function isCargoMassAcceptable(cmValue, cmStatus) {
    if(cmValue> 10000) {
        cmStatus.innerHTML = "Cargo mass exceeds capacity. (<10,000kg)";
        cmStatus.style.visibility = "visible";
        return false;
    } else {
        cmStatus.innerHTML = "Cargo mass low enough for launch";
        cmStatus.style.visibility = "visible";
        return true;
    }
}

function setNotReadyForLaunch(header) {
    header.innerHTML = "Shuttle not ready for launch";
    header.style.color = "red";
}
function setReadyForLaunch(header) {
    header.innerHTML = "Shuttle is ready for launch."
    header.style.color = "green";
}

function formSubmission(event, document, list, pilot, copilot, fuelLevel, cargoMass) {
    //variables to hold type of input 
    let pilotInpResult = validateInput(pilot.value);
    let copilotInpResult = validateInput(copilot.value);
    let fuelInpResult = validateInput(fuelLevel.value);
    let cargoInpResult = validateInput(cargoMass.value);
    //working with the faultylist
    let statuses = list.firstElementChild.children;
    let pilotStatus = statuses[0];
    let copilotStatus = statuses[1];
    let fuelLevelStatus = statuses[2];
    let cargoMassStatus = statuses[3];
    let infoHeader = document.getElementById("launchStatus");
    let isFuelGud = isFuelLevelAcceptable(fuelLevel.value, fuelLevelStatus);
    let isCargoGud = isCargoMassAcceptable(cargoMass.value, cargoMassStatus);
    let allReady = [];
    //more validation
    if(pilotInpResult !== "Not a Number") {
        alert("Make sure to enter valid information for each field!");
        pilotStatus.style.visibility = "hidden";
        setNotReadyForLaunch(infoHeader);
        allReady.push(false)
    } else {
        pilotStatus.style.visibility = "visible";
        allReady.push(true);
    }

    if(copilotInpResult !== "Not a Number") {
        alert("Make sure to enter valid information for each field!");
        copilotStatus.style.visibility = "hidden";
        setNotReadyForLaunch(infoHeader);
        allReady.push(false);
    } else {
        copilotStatus.style.visibility = "visible";
        allReady.push(true);
    }

    if(fuelInpResult !== "Is a Number") {
        alert("Make sure to enter valid information for each field!");
        setNotReadyForLaunch(infoHeader);
        allReady.push(false);
    }
    else if(isFuelGud === false) {
        setNotReadyForLaunch(infoHeader);
        allReady.push(false);
    } else {
        allReady.push(true);
    }

    if(cargoInpResult !== "Is a Number") {
        alert("Make sure to enter valid information for each field!");
        setNotReadyForLaunch(infoHeader);
        allReady.push(false);
    } else if(isCargoGud === false) {
        setNotReadyForLaunch(infoHeader);
        allReady.push(false);
    } else {
        allReady.push(true);
    }

    if(!allReady.some((element) => element === false)) {
        setReadyForLaunch(infoHeader);
    }

    event.preventDefault();
        
}

async function myFetch(url) {
    let planetsReturned;

    planetsReturned = await fetch(url).then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
module.exports.setNotReadyForLaunch = setNotReadyForLaunch;
