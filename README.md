# WeatherStation
Javascript Exercise: Weather Station
This program take information from https://www.torinometeo.org/api-realtime/ and show every weather station with their informations.
Tje informations are:
-The name of the station
-A flag of the nation
-The current temperature (color coded - red for hot, blue for cold, etc.)
-The city, region, province and country name
-A live image from the station (that changes with time)
-A link that opens the location of the station in google maps
-Add additional weather information
Each weather station have a header and a collapsible body.
The application remembers which weather stations are open and keep them open when the list
changes (e.g. filters are applied/removed, new data arrives).
The data are refreshed every 30 seconds and you can  pause and restart the automatic refresh with the button "Pause".
The page includes
■ An incremental filter at the top that filters based on the name of the station.
■ A select that filters stations based on the nation
The background of collapsible rappresents the weather in that location.
We do not use any jQuery plugins for this exercise.

In the file snow.js there are the functions for animation of snow.
In the file main.js there are the most important functions for the program:
-loadPage(), show the loading on the page
-showPage(), show the page whent tha call is finish
-createweatherStation(), create the object with the information that we need
-searchAccordion(), looks for the accordion that you search with the filter
-createCall()
-main(), is the central part of program
-animationAccordion(), create the animation for accordions
-interval(), create a interval that call a function
In the file main.js there are important functions for create,delete and update the elements in html:
-sobstiuteAccordion(), change the accordion in according on the update
-positioningSystem(), create the link that go on google maps
-imageExists, return the image of city
-takeImg(), show a img of the city when accordions are open
-generateAccordion(),generate the accordions
In the file fucntion.js there are important functions for animation.
In the file ajaxCall.js there are important functions for ajax call:
-makeGetRequest(), make a synchronous call
-makeGetRequestAsy(), make a asynchronous call

The page is responsive.
