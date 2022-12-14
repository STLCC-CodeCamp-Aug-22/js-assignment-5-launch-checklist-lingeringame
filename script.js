// Write your JavaScript code here!

window.addEventListener("load", function() {

    let url = "https://handlers.education.launchcode.org/static/planets.json"
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch(url);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randPlanet = pickPlanet(listedPlanets);
        console.log(randPlanet);
        addDestinationInfo(this.document, randPlanet.name, 
            randPlanet.diameter, randPlanet.star, 
            randPlanet.distance, randPlanet.moons, randPlanet.image);
    })
    
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let hasEmptyField = checkEmptyValues(event);
        if(hasEmptyField === false) {
            let pilotInput = document.querySelector("input[name=pilotName]");
            let copilotInput = document.querySelector("input[name=copilotName]");
            let fuelInput = document.querySelector("input[name=fuelLevel]");
            let cargoInput = document.querySelector("input[name=cargoMass]");
            let faultyItemsList = document.getElementById("faultyItems");
            formSubmission(event, window.document, faultyItemsList, pilotInput, copilotInput, fuelInput, cargoInput);

        } else {
            setNotReadyForLaunch(document.getElementById("launchStatus"))
            event.preventDefault();
        }
   })
});

function checkEmptyValues(event) {
    let values = [];
    let inputs = document.querySelectorAll(".formField label input");
    inputs.forEach(input => values.push(input.value.trim()))
    for(let value of values) {
     if(value === "" || value === null) {
         alert("All input fields are required")
         return true;
     }
    }
    return false;
   }