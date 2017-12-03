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
  * Function that retrun an accordion
  * @param {String} accordionName - name of accordion
  * @param {Int?} temperature
  * @returns {HTML Accordion} return the prepare accordion
  */

function generateAccordion(object) {

  //create the elements
    var button = document.createElement('button');
    var canvas = document.createElement('canvas');
    var panel = document.createElement('div');
    var overlay = document.createElement('div');
    var imgDiv = document.createElement('div');
    var textDiv = document.createElement('div');
    var imgTextDiv = document.createElement('div');
    var flag = document.createElement('img');
  //  var img = document.createElement('img');
    var a = document.createElement('a');
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
    imgTextDiv.classList.add("text-block");

    //img.classList.add("webcamImg");
    a.classList.add("material-icons");

    //add id
    textDiv.id = "descriptionBox";
    button.id = object.city;
    panel.id = object.city;
    imgDiv.id = object.city + "img";
    canvas.id = "stars";

    //fill the elements
    button.textContent = object.city + ", " + object.region + ", " + object.nation;
    label.textContent = "Location: " + object.city + ", " + object.region + ", " + object.nation
    p1.textContent = "Latitudine: " + object.latitudine;
    p2.textContent = "Longitudine: " + object.longitudine;
/* Devi sistemare le classi!(il codice qui funziona!!!)
    //add the img of flag in the button
    if (object.nation == "Italia")
      flag.src = urlItalianFlag;
    if (object.nation == "Francia")
      flag.src = urlFrenchFlag;
    if (object.nation == "Svizzera")
      flag.src = urlSwitzerlandFlag;
*/

    //append to page
    document.getElementById("container").appendChild(button);
    document.getElementById("container").appendChild(panel);
    button.appendChild(flag);
    panel.appendChild(canvas);
    panel.appendChild(overlay);
    overlay.appendChild(imgDiv);
    overlay.appendChild(textDiv);
    //imgDiv.appendChild(img);
    imgDiv.appendChild(imgTextDiv);
    imgTextDiv.appendChild(a);
    textDiv.appendChild(label);
    textDiv.appendChild(p1);
    textDiv.appendChild(p2);
    textDiv.appendChild(p3);

    var onClick = function(event){
    var weatherStations = makeGetRequest("https://www.torinometeo.org/api/v1/realtime/data/");
        weatherStations.forEach(function(weatherStation){
          if(weatherStation.station.city == object.city)
            takeImg(weatherStation);
          });
        };
        button.addEventListener('click', onClick);

}

/**
 * Function that retrun an img for the button is clicked
 * @param {Json} json - the json take from the site
 */

function takeImg(json){
  var div = document.getElementById(json.station.city + "img");
  var img = document.createElement('img');
  img.src = json.station.image_url;
  img.classList.add("webcamImg");
  div.appendChild(img);
}
