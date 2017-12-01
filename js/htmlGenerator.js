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
  //create the elements
    var button = document.createElement('button');
    var panel = document.createElement('panel');
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
    panel.classList.add("panel")
    imgDiv.classList.add("imgbox");
    textDiv.classList.add("descriptionBox");
    imgTextDiv.classList.add("text-block");
    img.classList.add("webcamImg");
    a.classList.add("material-icons");

    //fill the elements

    button.textContent = object.city;


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
