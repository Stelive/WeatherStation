/**
 * @file: htmlGenerator.css
 * @author: Gruppo 7
 * @members:
  - Amedeo Martello
  - Lorenzo Bergamasco
  - Alessando Oppedisano
  - Stefano Pedroli
 * @lesson: 17 - More jQuery
 * @numberOfTheExercise: 1
 * @exerciseTitle: Weather Station
 */

 //the object for the JSON
 var weatherStation = {
   city: "",
   temperature : "",
   nation: ""
 };


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
 /*function putInTheDom(object){
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
 }, 3000);*/
