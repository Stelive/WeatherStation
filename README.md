# WeatherStation
Javascript Exercise: Weather Station
You will be using jQuery and AJAX to get real-time weather station data
○ API: https://www.torinometeo.org/api-realtime/
○ Error status should be handled!
○ Loading status should be displayed!
● Requirements and features:
○ Do NOT use any jQuery plugins for this exercise!
○ The page should display a list of weather stations
○ Each weather station should have a header and a collapsible body
○ Clicking anywhere on the header opens the body
○ Each weather station should contain at least the following:
■ The name of the station
■ A flag of the nation
■ The current temperature (color coded - red for hot, blue for cold, etc.)
■ The city, region, province and country name
■ A live image from the station (that changes with time)
■ A link that opens the location of the station in google maps
■ Add additional weather information
Data refresh:
○ The data should be refreshed every 30 seconds
○ The top on the page should include the last refresh date and time
○ It should be possible to pause and restart the automatic refresh
● Open state:
○ The application should remember which weather stations are open and keep them open when the list
changes (e.g. filters are applied/removed, new data arrives).
● Animations:
○ Use jQuery or CSS animations for all changes
■ Open/close of collapsible
■ Weather station data changes
● Filters:
○ The page should include
■ An incremental filter at the top that filters based on the name of the station.
■ A select that filters stations based on the nation
■ The filters should be cumulative (possible to apply both filters at once)
■ Add any other filters that you wish
Bonuses:
○ Add icons to represent weather conditions
○ Set the refresh time (default 30s)
○ Load additional resources (e.g. images) only when the user actually opens the weather station’s
collapsible body.
○ Handles cases where images are not available (placeholder to avoid missing images)
○ Save a fallback JSON blob and get data from it if the primary endpoint fails(notifying the user)
○ Mega bonus: Study the complete APIs
■ https://www.torinometeo.org/api/doc/#/
■ Show ‘Historical weather data’ using the same list you used for real-time list
■ The user should be able to select the date
● Useful links:
○ https://www.w3schools.com/jsref/jsref_encodeURI.asp
○ https://api.jquery.com/parent/
○ https://brajeshwar.github.io/entities/
○ https://api.jquery.com/ (for extra features not discussed in these slides)
Note: reference images with visual details are attached
Fun
● Use a jquery plugin to make your page more colorful
○ Create an HTML page with various text elements
■ <h1> - <h6>, <p>, <a>, <span>, <div>, etc
■ Use the funText jQuery plugin on your page
● https://github.com/briznad/funText/
■ Hotlink directly to the github file
○ Here is a demo of what it can do
■ http://briznad.github.io/funText/
