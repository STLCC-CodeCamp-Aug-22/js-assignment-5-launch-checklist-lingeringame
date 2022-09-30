// Write your JavaScript code here!

window.addEventListener("load", function() {

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })
    
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        checkEmptyValues(event);
        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let cargoInput = document.querySelector("input[name=cargoMass]");

        formSubmission(window.document, "list", pilotInput, copilotInput, fuelInput, cargoInput);
        // pilotInpResult = validateInput(pilotInput.value);
        // copilotInpResult = validateInput(copilotInput.value);
        // fuelInpResult = validateInput(fuelInput.value);
        // cargoInpResult = validateInput(cargoInput.value);

        // console.log(pilotInpResult);
        // console.log(copilotInpResult);
        // console.log(fuelInpResult);
        // console.log(cargoInpResult);
        
        event.preventDefault();
   })
});

function checkEmptyValues(event) {
    let values = [];
    let inputs = document.querySelectorAll(".formField label input");
    inputs.forEach(input => values.push(input.value))
    for(let value of values) {
     if(value === "") {
         alert("All input fields are required")
         event.preventDefault();
         break;
     }
    }
   }