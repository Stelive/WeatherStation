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
            //initSnow();
        }
    }
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

var weatherStations = makeGetRequest("https://www.torinometeo.org/api/v1/realtime/data/");
var weatherStation = createweatherStation(weatherStations[0]);
generateAccordion(weatherStation)
