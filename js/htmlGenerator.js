/**
 * @file: htmlGenerator.js
 * @author: Gruppo 7
 * @members:
  - Alessando Oppedisano
  - Amedeo Martello
  - Lorenzo Bergamasco
  - Stefano Pedroli
 * @lesson: 17 - More jQuery
 * @numberOfTheExercise: 1
 * @exerciseTitle: Weather Station
 */

//urls flag of the nation
var urlItalianFlag = "https://icon-icons.com/icons2/266/PNG/128/Italy_29749.png";
var urlFrenchFlag = "https://icon-icons.com/icons2/266/PNG/128/France_29740.png";
var urlSwitzerlandFlag = "https://icon-icons.com/icons2/266/PNG/128/Switzerland_29744.png";

/**
* Function create an accordion
* @param {String} accordionName - name of accordion
*/
function generateAccordion(object) {

    //create the elements
    var button = document.createElement('button');
    var canvas = document.createElement('canvas');
    var panel = document.createElement('div');
    var overlay = document.createElement('div');
    var textBlock = document.createElement('div');
    var imgDiv = document.createElement('div');
    var textDiv = document.createElement('div');
    var divTemperatureAndFlag = document.createElement('div');
    var flag = document.createElement('img');
    var temperature = document.createElement('label');
    var label = document.createElement('label');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');

    //add the class
    button.classList.add("accordion");
    panel.classList.add("panel")
    canvas.classList.add("canvas");
    overlay.classList.add('overlay');
    panel.className += " snow";
    imgDiv.classList.add("imgBox");
    textDiv.classList.add("descriptionBox");
    divTemperatureAndFlag.className = "tempreatureAndFlag";
    flag.classList.add("flag");
    temperature.htmlFor = object.nation;
    temperature.classList.add("temperature");

    //add id
    textDiv.id = "descriptionBox";
    button.id = object.slug;
    panel.id = object.slug;
    imgDiv.id = object.slug + "img";
    flag.id = object.nation;

    // set day or night background
    if (object.datetime.getHours() > 17 || object.datetime.getHours() < 6) {
      if (parseFloat(object.rain) > 1.0) {
        canvas.id = "rain";
      } else {
        canvas.id = "stars";
      }
      canvas.style.background = "-webkit-linear-gradient(bottom, rgb(7, 48, 109) 40%, rgb(16, 16, 16) 80%)";
    } else {
      if (parseFloat(object.rain) > 1.0) {
        canvas.id = "rain";
        canvas.style.background = "-webkit-linear-gradient(bottom, rgb(0, 41, 103) 40%, rgb(14, 26, 43) 80%)";
      } else {
        canvas.id = "day";
        canvas.style.background = "-webkit-linear-gradient(bottom, rgb(160, 198, 255) 40%, rgb(92, 144, 218) 80%)";
      }
    }
    // set rain or snow effects
    if (parseFloat(object.rain) > 1.0) {
        canvas.id = "rain";
        canvas.style.background = "-webkit-linear-gradient(bottom, rgb(126, 158, 206) 40%, rgb(197, 208, 226) 80%)";
    }

    //fill the elements
    button.textContent = object.city + ", " + object.region + ", " + object.nation;
    label.textContent = "Location: " + object.city + ", " + object.region + ", " + object.nation
    p1.textContent = "Latitudine: " + object.latitudine;
    p2.textContent = "Longitudine: " + object.longitudine;
    if (object.temperature == null || object.temperature == "") {
      temperature.textContent = "Missing Data";
    } else  {
      temperature.textContent = object.temperature + "°C";
    }

    //add the img of flag in the button
    if (object.nation == "Italia")
      flag.src = urlItalianFlag;
    if (object.nation == "Francia")
      flag.src = urlFrenchFlag;
    if (object.nation == "Svizzera")
      flag.src = urlSwitzerlandFlag;

    //append to page
    document.getElementById("container").appendChild(button);
    document.getElementById("container").appendChild(panel);
    divTemperatureAndFlag.appendChild(temperature);
    divTemperatureAndFlag.appendChild(flag);
    button.appendChild(divTemperatureAndFlag);
    panel.appendChild(canvas);
    panel.appendChild(overlay);
    overlay.appendChild(imgDiv);
    overlay.appendChild(textDiv);
    textDiv.appendChild(label);
    textDiv.appendChild(p1);
    textDiv.appendChild(p2);
    textDiv.appendChild(p3);

    // action for button
    var onClick = function(event){
    var weatherStations = makeGetRequest("https://www.torinometeo.org/api/v1/realtime/data/" + event.target.id + "/");
          if(weatherStations.station.slug == object.slug) {
            takeImg(weatherStations);
          }
     };
     button.addEventListener('click', onClick);
}

/**
 * Function that retrun an img for the button is clicked
 * @param {Json} json - the json take from the site
 */
function takeImg(json){

  //create the elements
  var imgTextDiv = document.createElement('div');
  var div = document.getElementById(json.station.slug + "img");
  var img = document.createElement('img');
  var a = document.createElement('a');
  var text_block = document.createElement('div');
  var i = document.createElement('i');

  //add the class
  text_block.className = "text-block";
  img.className = "webcamImg";
  i.className = "material-icons";

  //fill the elements
  div.innerHTML = "";

  // if url webcam there isn't we put img_url of city
  if (json.station.webcam == ""){
    img.src = json.station.image_url;
  } else {
    //if (imageExists(json.station.webcam)) {
      img.src = json.station.webcam;
    /*} else {
      img.src = json.station.image_url;
    }*/
  }

  img.alt = json.station.city;
  a.href = positioningSystem(json.station.lat, json.station.lng);
  a.target = "_blank";
  i.innerHTML = "";

  //append to page
  div.appendChild(img);
  a.appendChild(i);
  text_block.appendChild(a);
  div.appendChild(text_block);
}

function imageExists(image_url){
  var http = new XMLHttpRequest();
  http.open('HEAD', image_url, false);
  return http.status != 404;

}

function positioningSystem(lat, long) {
  return "https://www.google.it/maps/@" + lat + "," + long + ",15z?hl=it";
}

/**
 * Sobstitute the button of accordion
 */
function sobstiuteAccordion(weatherStations){
  weatherStations.forEach(function(weatherStation){
    var button = document.getElementById(weatherStation.station.slug);
    var accordion = document.getElementById(weatherStation.station.slug);
    if (button == null){
      generateAccordion(weatherStation);
    }
    var temperature = button.childNodes[1].childNodes[0];
    temperature.textContent = weatherStation.temperature + "°C";
  });
console.log("ahahahahahahah");
}
