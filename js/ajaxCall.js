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
   request.open('GET', url, true);
   request.onload = function() {
     if (request.status === 200) {
       object = JSON.parse(request.responseText);
       object.forEach(function(object) {
           var weatherStation = createweatherStation(object);
           generateAccordion(weatherStation);
       });
       showPage();
     }
   };
  request.onerror = function() {
      console.error('Network error');
      var requestJsonBlob = new XMLHttpRequest();
      requestJsonBlob.open("GET", "https://jsonblob.com/api/jsonBlob/4d5329e6-dfe5-11e7-97d8-ed4eeafc7c05", true);
      requestJsonBlob.send(null)
      requestJsonBlob.onload = function() {
        if (requestJsonBlob.status === 200) {
          object = JSON.parse(requestJsonBlob.responseText);
          console.log(object);
          object.forEach(function(object) {
              var weatherStation = createweatherStation(object);
              generateAccordion(weatherStation);
          });
          animationAccordion();
          showPage();
        }
      };
  };
  request.send();

 }

/**
 * [makeGetRequestAsy description]
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
/*function makeGetRequestAsy(url){
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.addEventListener('load',function(){
    object = JSON.parse(request.responseText);
    sobstiuteAccordion(object);
  });
  request.send(null);
}*/

function makeGetRequestAsy(url){
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function() {
    if (request.status === 200) {
      object = JSON.parse(request.responseText);
      sobstiuteAccordion(object);
    }
  };
 request.onerror = function() {
     console.error('Network error');
     var requestJsonBlob = new XMLHttpRequest();
     requestJsonBlob.open("GET", "https://jsonblob.com/api/jsonBlob/4d5329e6-dfe5-11e7-97d8-ed4eeafc7c05", true);
     requestJsonBlob.send(null)
     requestJsonBlob.onload = function() {
       if (requestJsonBlob.status === 200) {
         object = JSON.parse(requestJsonBlob.responseText);
         sobstiuteAccordion(object);
       }
     };
 };
 request.send();
}

function imageExists(image_url){

  var http = new XMLHttpRequest();
  http.open('HEAD', image_url, false);
  return http.status != 404;

}
