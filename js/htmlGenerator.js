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

var pageNode = document.body;

 /**
  * Function that retrun an accordion
  * @param {String} accordionName - name of accordion
  * @param {Int?} temperature
  * @returns {HTML Accordion} return the prepare accordion
  */
function generateAccordion(accordionName, temperature) {
  /*<button class="accordion firstAccordion">Section 1</button>
  <div class="panel">
    <div class="divProva">

    </div>
  </div> */

  var button = document.createElement('button');
  var firstDiv = document.createElement('div');
  var secondDiv = document.createElement('div');

  button.className("className");
  firstDiv.className("panel");
  secondDiv.className("divProva");

  pageNode.appendChild(button);
  button.appendChild(firstDiv);
  firstDiv.appendChild(secondDiv);

}
