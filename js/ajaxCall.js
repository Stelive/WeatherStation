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
   var object ;
   request.open("GET", url ,false);
   request.setRequestHeader('Content-type', 'application/json');
   request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        showPage();
      }
   };

  request.send(null);
  object = JSON.parse(request.responseText);
  return object;
 }

/**
 * [makeGetRequestAsy description]
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
function makeGetRequestAsy(url){
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.send(null);
  request.addEventListener('load',function(){
destroyedBody();
    object = JSON.parse(request.responseText);
    object.forEach(function(weatherStation) {
        var weatherStation = createweatherStation(weatherStation);
        generateAccordion(weatherStation);
    })
    return object;
  });
}

function imageExists(image_url){

  var http = new XMLHttpRequest();
  http.open('HEAD', image_url, false);
  return http.status != 404;

}
