/**
 * @file: main.js
 * @author: Gruppo 7
 * @members:
  - Stefano Pedroli
  - Alessando Oppedisano
  - Lorenzo Bergamasco
  - Amedeo Martello
 * @lesson: 17 - More jQuery
 * @numberOfTheExercise: 1
 * @exerciseTitle: Weather Station
 */

 var skyColor = {
   daySnow : "#c6e2ff",
   daySun : "#b2e6f4",
   dayCloud : "#dbdbdb",
   nightSun: "#131862", // scritte bianche di notte!!
   nightCloud : "#0a2c74", // fa schifo le nuvole dovrebbero essere bianche
   sunset : "F3936B" // queso fossi in voi non lo userei mai
 };

/** Hide the page until is ready
*/
function loadPage() {
    document.getElementById("container").style.display = "none";
}

/** Show the page when is ready
*/
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("container").style.display = "block";
}

/** * Return a object that is the conversion of json of the site
* @param {Object} object - the object from the json
* @returns {Object} the object with minus property */

function createweatherStation(object){
  var weatherStation = {
    city: "",
    nation: "",
    region: "",
    temperature : "",
    latitudine: "",
    longitudine: ""
  };
  weatherStation.city = object.station.city;
  weatherStation.nation = object.station.nation.name;
  weatherStation.region = object.station.region.name;
  weatherStation.temperature = object.temperature;
  weatherStation.latitudine = object.station.lat;
  weatherStation.longitudine = object.station.lng;
  return weatherStation
}

loadPage();
//Ho commentato il set inteval perche rallenta veramente tanto la pagina!!!!
//setInterval(function(){
var weatherStations = makeGetRequest("https://www.torinometeo.org/api/v1/realtime/data/");
  weatherStations.forEach(function(weatherStation) {
    var weatherStation = createweatherStation(weatherStation);
    generateAccordion(weatherStation);
  });
//}, 10000);

var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "flex") {
            panel.style.display = "none";
        } else {
            panel.style.display = "flex";
        }
    }
}
