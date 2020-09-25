// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
const planetDiv = document.getElementById("missionTarget");

response.json().then(function(json){
   console.log(json[0])
   
   let planet = json[0]

   planetDiv.innerHTML = `
   <h2>Mission Destination</h2>
<ol>
   <li>Name: ${planet.name}</li>
   <li>Diameter: ${planet.diameter}</li>
   <li>Star: ${planet.star}</li>
   <li>Distance from Earth: ${planet.distance}</li>
   <li>Number of Moons: ${planet.moons}</li>
</ol>
<img src="${planet.image}"></img>

`
})
} );



window.addEventListener("load", function(){
   let form = document.querySelector("form");
   let list = document.getElementById('faultyItems')
   let launchStatus = document.getElementById('launchStatus')
   list.style.visibility = 'hidden'
   let pilotStatus = document.getElementById("pilotStatus")
   let copilotStatus = document.getElementById("copilotStatus")
   let fuelStatus = document.getElementById("fuelStatus")
   let cargoStatus = document.getElementById("cargoStatus")

   form.addEventListener("submit", function(event) {
      event.preventDefault()
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let cargoInput = document.querySelector("input[name=cargoMass]");
      let fuelLevel = Number(fuelInput.value)
      let cargoMass = Number(cargoInput.value)
      let testPilot = Number(pilotName.value)
      let testCoPilot = Number(copilotName.value)
      if (pilotNameInput.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      } else if ( isNaN(fuelLevel) || isNaN(cargoMass) || isNaN(testPilot) === false || isNaN(testCoPilot) === false){
         alert('Make sure to enter valid information in each field.')
      }
         
      else {
         list.style.visibility = 'visible';

         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready.`
      copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready.`

      if(fuelLevel.value < 10000 && cargoMass.value <= 10000){
         fuelStatus.innerHTML = 'Not enough fuel for the journey.'
         cargoStatus.innerHTML = 'Cargo mass is low enough to launch.'
         launchStatus.innerHTML = 'Shuttle not ready for launch.'
         launchStatus.style.color = '#8B0000'
      }
      else if (fuelLevel.value >= 10000 && cargoMass.value >= 10000){
         fuelStatus.innerHTML = 'Enough fuel for the journey.'
         cargoStatus.innerHTML = 'Cargo mass is too heavy for launch.'
         launchStatus.innerHTML = 'Shuttle not ready for launch.'
         launchStatus.style.color = '#8B0000'
      } else {
         launchStatus.innerHTML = 'Shuttle is ready for launch.'
         launchStatus.style.color = '#00FF00'
      }
      }
   

   });
});
