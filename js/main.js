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
    //document.getElementById("loader").style.display = "block";
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
    city : "",
    nation : "",
    region : "",
    temperature : "",
    latitudine : "",
    longitudine : "",
    slug : "",
    datetime : new Date(object.datetime),
    rain: ""
  };

  //assignament the object's property
  weatherStation.city = object.station.city;
  weatherStation.nation = object.station.nation.name;
  weatherStation.region = object.station.region.name;
  weatherStation.temperature = object.temperature;
  weatherStation.latitudine = object.station.lat;
  weatherStation.longitudine = object.station.lng;
  weatherStation.slug = object.station.slug;
  weatherStation.rain = object.rain;

  return weatherStation
}

/**
 * searchAccordion search according to the name and nation
 */
function searchAccordion() {
    // Declare variables
    var input, filter,  a, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    buttons = document.getElementsByClassName("accordion");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < buttons.length; i++) {
        var text = buttons[i].textContent;
        if (text.toUpperCase().indexOf(filter) > -1) {
          var optionCountry = document.getElementById("country");
          var selectedCountry = optionCountry.options[optionCountry.selectedIndex].value;
          var tempreatureAndFlag = buttons[i].getElementsByClassName("tempreatureAndFlag")[0];
          var country = tempreatureAndFlag.getElementsByClassName("flag")[0].id;
          var pannels = document.getElementsByClassName("panel");

          if (selectedCountry != country && selectedCountry != "All") {
            buttons[i].style.display = "none";
            pannels[i].style.display = "none";
            console.log(pannels[i]);
          } else {
            buttons[i].style.display = "flex";
          }
        } else {
            buttons[i].style.display = "none";
            pannels[i].style.display = "none";
            console.log(pannels[i]);
        }
    }
}

loadPage();
var weatherStations = makeGetRequest("https://www.torinometeo.org/api/v1/realtime/data/");
weatherStations.forEach(function(weatherStation) {
    var weatherStation = createweatherStation(weatherStation);
    generateAccordion(weatherStation);
});

setTimeout(function(){
  setInterval(function(){
    var weatherStations = makeGetRequestAsy("https://www.torinometeo.org/api/v1/realtime/data/");

  },5000);
},5000);

//}

var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            // pulisco il canvas ma tanto non basta per lo snow effects
            var canvas = panel.getElementsByTagName("canvas")[0];
            canvas.getContext('2d').clearRect(0, 0, canvas.width,
            canvas.height);
        } else {

          var pannels = document.getElementsByClassName("panel");
          for (var i = 0; i < pannels.length; i++) {
            pannels[i].style.display = "none";
          }
          panel.style.display = "block";
          if (panel.getElementsByTagName("canvas")[0].id == "rain") {
            rain(panel.querySelector("#rain")); // pass canvas to apply effects
          } else if (panel.getElementsByTagName("canvas")[0].id == "snow") {
            //snow(panel.querySelector("#snow"));
          } else if (panel.getElementsByTagName("canvas")[0].id == "stars") {
            setTimeout(stars, 200, panel.querySelector("#stars"));
          }
        }
    }
}
