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

// loader
var myVar;
function loadPage() {
    document.getElementById("container").style.display = "none";
    myVar = setTimeout(showPage, 1000);
    // qua invece di un intervallo facciamo partire...
    // ...la cosa quando ha finito di caricare
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("container").style.display = "block";
}

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

var skyColor = {
  daySnow : "#c6e2ff",
  daySun : "#b2e6f4",
  dayCloud : "#dbdbdb",
  nightSun: "#131862", // scritte bianche di notte!!
  nightCloud : "#0a2c74", // fa schifo le nuvole dovrebbero essere bianche
  sunset : "F3936B" // queso fossi in voi non lo userei mai
};
/** * Return a object that is the conversion of json of the site
* @param {Object} object - the object from the json
* @returns {Object} the object with minus property */

function createweatherStation(object){
  var weatherStation = {
    city: "",
    temperature : "",
    nation: "",
    latitudine: "",
    longitudine: ""
  };
  weatherStation.city = object.station.city;
  weatherStation.temperature = object.temperature;
  weatherStation.nation = object.station.nation.name;
  weatherStation.latitudine = object.station.lat;
  weatherStation.longitudine = object.station.lng;
  return weatherStation
}

var weatherStations = makeGetRequest("https://www.torinometeo.org/api/v1/realtime/data/");
var weatherStation = createweatherStation(weatherStations[0]);
generateAccordion(weatherStation)
