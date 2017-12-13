/**
 * @file: ajaxCall.js
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

 /** * Return a object that is the converted json of the site
 * @param {String} url - the url of site
 * @returns {Object} - object from the json */

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
  request.addEventListener('load',function(){
    object = JSON.parse(request.responseText);
    sobstiuteAccordion(object);
  });
  request.send(null);
}

/**
 * [imageExists description]
 * @param  {[type]} image_url - the image url
 * @return {[type]} - a status different from error 404
 */
function imageExists(image_url){

  var http = new XMLHttpRequest();
  http.open('HEAD', image_url, false);
  return http.status != 404;
}
