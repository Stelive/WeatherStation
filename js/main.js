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

// loader
var myVar;
function loadPage() {
    document.getElementById("container").style.display = "none";
    myVar = setTimeout(showPage, 1000);
    // qua invece di un intervallo facciamo partire...
    // ...la cosa quando ha finito di caricare
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("container").style.display = "block";
}

// accordion
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}
