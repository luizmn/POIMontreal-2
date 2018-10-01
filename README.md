#README
This is a simple map guide to the top places to visit in Manaus, AM.

###Requirements
The tools used to develop this guide were:  
* Knockout JS 3.4.2  
* Google Maps API  
* Foursquare API  
* Bootstrap 3  
* Javascript  
* HTML5  
* CSS


In order to make it work, you must have Google Maps and Foursquare API Keys.
If you do not have them, follow these links to obtain yours:  
[Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key)  
[Foursquare Developer](https://developer.foursquare.com/docs/api)  
[How to get Foursquare API Client ID and Client Secret details](https://www.knowband.com/blog/user-manual/get-foursquare-api-client-id-client-secret-details/)  

If you do have the keys, just download or clone the project via Github and put it in your desired folder. 
 
**Adding Google Maps Key:**  
Edit the file **"index.html"** and look for the expression **`YOUR_API_KEY`**. Change it with your Google Maps key, save and close the file.

**Adding Foursquare Keys:**  
1 - Edit the file **"static/js/scripts.js"** and look for the section: 
`// Foursquare credentials ` 
`var fs_client_secret = "YOUR_CLIENT_SECRET";`
`var fs_client_id = "YOUR_CLIENT_ID";`  
Change both `YOUR_CLIENT_SECRET` and `YOUR_CLIENT_ID` with your information, save and close the file.   
 
**Note:** The secret and ID information must be written inside the quotes " ". 

2 - Next, double click the file **"index.html"**  and the guide will open in your default browser.

**Note:** An active internet connection is required to use the guide since it will request information on Google Maps and Foursquare.

###How the guide works
Speaking in a simple way, this guide works like this:  
The locations are hard coded in **"scripts.js"**.  
When **"index.html"** is opened, the page loads a Google Maps with the pre-selected markers. 
When you click in a marker, it requests information like the address and a photo from Foursquare and displays it in a information window that pops in the map marker.  
If you want more information about the place, there is also a **"More info"** link on the bottom that will take you to the full Foursquare page of the clicked marker.

One single location inserted in **"scripts.js"** contains:  
1 - Name/Title - This is used to generate the list on the left menu;  
2 - Location (consisting in latitude and longitude) - Needed to set a corresponding marker in the map to locate the place.  
3 - Foursquare ID (venue_id in code) - Parameter used to match the information requested from Foursquare;

###How to use the guide
On the left there is a menu list with the pre-selected places, click on your desired place and it will open an information window in the correspondent marker in the map.  

There is also a search filter on top of the list. Type something there and it will search/filter from the places list. 

Besides that, Google Maps commands like zoom, clicking and moving the map are working normally, you can even click in another place not listed to get the information, but this will come from Google Maps itself.  


###References
* [Bootstrap Theme](https://startbootstrap.com/template-overviews/resume/)
* [KnockoutJS Custom bindings](https://knockoutjs.com/documentation/custom-bindings.html)
* [KnockoutJS and Google Maps binding](http://www.hoonzis.com/knockoutjs-and-google-maps-binding/)
* [Knockout Binding Handler for Google Maps](https://testasoftware.com/knockout-binding-handler-for-google-maps)
* [W3Schools How TO - Fixed Sidebar](https://www.w3schools.com/howto/howto_css_fixed_sidebar.asp)
* [W3Schools How TO - Responsive Sidebar](https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp)
* [Google Maps Documentation - Removing Markers](https://developers.google.com/maps/documentation/javascript/examples/marker-remove)
* [Utility Functions in KnockoutJS](http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html)
* [Google Maps Documentation - Complex Marker Icons](https://developers.google.com/maps/documentation/javascript/examples/icon-complex)
* [W3Schools Google Maps Events](https://www.w3schools.com/graphics/google_maps_events.asp)
* [5 ways to customize Google Maps InfoWindow
Google Maps](http://en.marnoto.com/2014/09/5-formas-de-personalizar-infowindow.html)
* [Google Maps Documentation - Marker Labels](https://developers.google.com/maps/documentation/javascript/examples/marker-labels)
* [Google Maps API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)
* [Asynchronous error handling in JavaScript](https://ruben.verborgh.org/blog/2012/12/31/asynchronous-error-handling-in-javascript/)
* [Reading JSON from URL in JavaScript](http://zetcode.com/articles/javascriptjsonurl/)
* [KnockoutJS: Loading data from AJAX](https://gistpages.com/posts/knockoutjs_loading_data_from_ajax)
* [jQuery.getJSON() - Ajax Shorthand methods](http://api.jquery.com/jQuery.getJSON/)
* [Knockout Projections – a plugin for efficient observable array transformations](http://blog.stevensanderson.com/2013/12/03/knockout-projections-a-plugin-for-efficient-observable-array-transformations/)
* [Trip Advisor - Things to Do in Manaus](https://www.tripadvisor.com/Attractions-g303235-Activities-Manaus_Amazon_River_State_of_Amazonas.html)
* [Foursquare -Top Picks Manaus](https://foursquare.com/explore?mode=url&near=Manaus%2C%20AM%2C%20Brazil&nearGeoId=72057594041591453&q=Top%20Picks)