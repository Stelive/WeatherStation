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

// accordion
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}
/**
 * @file: main.js
 * @author: Gruppo ...
 * @lesson: 17 -
 * @numberOfTheExercise: ?
 * @exerciseTitle: Weather Station
 *
 * Purpose of file:
 * Prova 1
*/

//the object for the JSON
var weatherStation = {
  city: "",
  temperature : "",
  nation: ""
};

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

// accordion
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}


/** * Return a object that is the conversion of json of the site
* @param {String} ulr - the url of site
* @returns {Object} the object from the json */

function makeGetRequest(url){
  var request = new XMLHttpRequest();
  request.open("GET", url ,false);
  request.setRequestHeader('Content-type', 'application/json');
  request.send(null); var object = JSON.parse(request.responseText);
  return object
}
//da valutare effetiva utilità
/** * Return a object that is the conversion of json of the site
* @param {Object} object - the object from the json
* @returns {Object} the object with minus property */
/*

function createweatherStation(object){
  var weatherStation = {
    city: "",
    temperature : "",
    nation: ""
  };
  weatherStation.city = object.station.city;
  weatherStation.temperature = object.temperature;
  weatherStation.nation = object.nation.naem;

}
*/

// è giusta ma bisogna vedere le classi del bottone
function putInTheDom(object){
var $buttons = $("button")
$buttons.each(function($button){
  $($button).attr('value', object.station.city);
  });
}


setInterval(function(){
  var weatherStations = makeGetRequest("https://www.torinometeo.org/api/v1/realtime/data/");
  console.log(weatherStations);
  weatherStations.forEach(function(weatherStation){
  //  putInTheDom(weatherStation);
});
 }, 3000);
