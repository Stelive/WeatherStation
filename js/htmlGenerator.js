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

 /**
  * Function that retrun an accordion
  * @param {String} accordionName - name of accordion
  * @param {Int?} temperature
  * @returns {HTML Accordion} return the prepare accordion
  */
function generateAccordion(object) {
console.log(object);
/*<button class="accordion">Arolla, Hérens, Svizzera</button>
<div class="panel snow">
  <div class="imgBox">
    <img class="webcamImg" src="http://www.arolla.com/pigne/pignex.jpg" alt="Nature" style="width:100%;">
    <div class="text-block">
      <a href="#"><i class="material-icons">&#xE55F;</i></img></a>
    </div>
  </div>
  <div class="descriptionBox" id="descriptionBox">
  <label>Location Name: Arolla, Hérens, Svizzera</label>
    <img src="https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy-day-1.svg">
    <p>Latitudine: "46.0249702"</p>
    <p>Longitudine": "7.480910999999992"</p>
    <p>Elevazione: 2084</p>
  </div>
</div>

</div> <!-- container div -->*/

  //create the elements
    var button = document.createElement('button');
    var panel = document.createElement('div');
    var imgDiv = document.createElement('div');
    var textDiv = document.createElement('div');
    var imgTextDiv = document.createElement('div');
    var img = document.createElement('img');
    var a = document.createElement('a');
    var label = document.createElement('label');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');

    //add the class
    button.classList.add("accordion");
    //button.className += " active";
    panel.classList.add("panel")
    panel.className += " snow";
    imgDiv.classList.add("imgbox");
    textDiv.classList.add("descriptionBox");
    imgTextDiv.classList.add("text-block");
    img.classList.add("webcamImg");
    a.classList.add("material-icons");

    //add id
    textDiv.id = "descriptionBox";

    //fill the elements
    button.textContent = object.city + ", " + object.region + ", " + object.nation;
    label.textContent = "Location: " + object.city + ", " + object.region + ", " + object.nation
    p1.textContent = "Latitudine: " + object.latitudine;
    p2.textContent = "Longitudine: " + object.longitudine;

    //append to page
    document.getElementById("container").appendChild(button);
    document.getElementById("container").appendChild(panel);
    panel.appendChild(imgDiv);
    panel.appendChild(textDiv);
    imgDiv.appendChild(img);
    imgDiv.appendChild(imgTextDiv);
    imgTextDiv.appendChild(a);
    textDiv.appendChild(label);
    textDiv.appendChild(p1);
    textDiv.appendChild(p2);
    textDiv.appendChild(p3);
}
