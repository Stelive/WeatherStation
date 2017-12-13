# WeatherStation
Javascript Exercise: Weather Station
This program take information from: https://www.torinometeo.org/api-realtime/
and show every weather station with their informations.
The informations are:
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
The data are refreshed every 30 seconds and you can pause and restart the automatic refresh with the button "Pause".
The page includes:
■ An incremental filter at the top that filters based on the name of the station.
■ A select that filters stations based on the nation
The background of collapsible represents the weather in that location.
We do not use any jQuery plugins for this exercise.

Group 7 - WeatherStation

In the file snow.js there are the functions for animation of snow.
This file isn't called anywhere in entire code, we've had troubles
in implementing this code inside various collapsible fragments of page.

In the file main.js there are the functions about the creation of WeatherStation, The LoadPage & ShowPage function and two functions.
for create and animate the accordion. Most important functions for the program are:
-loadPage(), show the loading on the page
-showPage(), show the page when the call is finish
-createweatherStation(), create the object with the information that we need
-searchAccordion(), looks for the accordion that you search with the filter
-createCall()
-main(), is the central part of program
-animationAccordion(), create the animation for accordions
-interval(), create a interval that call a function

In file htmlGenerator.js there are important functions for create, delete and update the elements in HTML:
-sobstiuteAccordion(), changes the accordion in according on the update
-positioningSystem(), creates the link that goes on Google Maps
-imageExists(), returns the image of city
-takeImg(), shows a img of the city when accordions are open
-generateAccordion(), generates the accordions

In the file function.js there are key functions for animation

In the file ajaxCall.js there are functions for ajax calls:
-makeGetRequest(), makes a synchronous call
-makeGetRequestAsy(), makes an asynchronous call

The page is responsive.


Possible future implementations:
-Snow effect on accordions in which temperature is below a certain
value
-localJSON is not used because we've planned to use as a temporary storage
in case both torinometeo.org and jsonblob will be unaccessible, but
we've encountered problems in retrieving data from main site in these days.
-We want to create a system that, when apis from torinometeo.org are
available, our website takes json that uses to construct the page and
stores it on jsonblob, to create a sort of last update.
