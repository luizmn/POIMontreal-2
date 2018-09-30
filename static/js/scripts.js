// Functions used to show/hide the sidebar
function sidebar_open() {
    document.getElementById("placesSidebar").style.display = "block";
}

function sidebar_close() {
    document.getElementById("placesSidebar").style.display = "none";
}

// Creates the variables to store the map and pre-selected markers
var map;
var markers = ko.observableArray();

// Define the variables to label the markers
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

// Get info from foursquare using the venue_id hardcoded in locations array
// Foursquare credentials
var foursquare_url;
var fs_client_secret = "A5UFFIC2YA05X1KORVF31T4ORLFHAEIZGNVHA2NAWW5J4AII";
var fs_client_id = "YHMKWSBNT41RJFB5LLCA3WA3BJNMZDKZICQ0V02UD0O0KAZH";

// ------Begin get info from foursquare------

function fsSearch(venueId, infowindow) {
    // Get information using venue id as the main parameter
    // use this on production
    /*foursquare_url = "https://api.foursquare.com/v2/venues/" +
    venueId +
    "?v=20180922&client_id=" +
    fs_client_id +
    "&client_secret=" +
    fs_client_secret;*/


    foursquare_url = "https://api.foursquare.com/v2/venues/" +
    venueId +
    "?v=20180922&oauth_token=GXAGYHX5KE3JEPUGVPNDWTBZJ4DCUCYBCSTVZGSYIDUED1TU";


    $.getJSON(foursquare_url)
    .done(function(data) {
          fs_title = data.response.venue.name;
          fs_category = data.response.venue.categories[0].name; // ? data.response.venue.categories[0].name : 'N/A';
          fs_address = data.response.venue.location.formattedAddress[0];
          fs_url = data.response.venue.canonicalUrl;
          fs_prefix = data.response.venue.photos.groups[1].items[0].prefix;
          fs_suffix = data.response.venue.photos.groups[1].items[0].suffix;
          infowindow.setOptions({
                                maxWidth: 150
                                });
          infowindow.setContent("<div class='card'>" +
                                "<img src='" + fs_prefix + "300x300" +
                                fs_suffix +
                                "' alt='" + fs_title + " photo' style='width:100%'>" +
                                "<div class='container'>" +
                                "<h4>" + fs_title + "</h4>" +
                                "<p><b>Category:</b> " + fs_category +
                                "<br><b>Address:</b> " + fs_address +
                                "<br><a href='" +
                                fs_url + "' target='_blank'>" +
                                "More info on Foursquare</a></p></div></div>");
          })
    .fail(function() {
          infowindow.setContent('Foursquare error');
          });

}
// ------End get info from foursquare------

// ------Begin Pre-selected markers-------
// Sets the data for the pre-selected markers consisting of name, latitude,
// longitude, id from foursquare and z-index;
// The z-index specifies the stack order of this marker, relative to other
// markers on the map.

var locations = [{
                 title: 'Senator Jefferson Peres Park',
                 location: {
                 lat: -3.137551,
                 lng: -60.016035
                 },
                 fs_id: '4dcf0a267d8b975f18deea9f',
                 zindex: 1
                 },
                 {
                 title: 'Eduardo Ribeiro Museum',
                 location: {
                 lat: -3.130811,
                 lng: -60.025272
                 },
                 fs_id: '4e14c524091a9211bed4db0c',
                 zindex: 2
                 },
                 {
                 title: 'Cultural Center Rio Negro Palace',
                 location: {
                 lat: -3.135076,
                 lng: -60.016868
                 },
                 fs_id: '4c41ad2d520fa593bfecc9ac',
                 zindex: 3
                 },
                 {
                 title: 'Amazon Theatre',
                 location: {
                 lat: -3.130289,
                 lng: -60.023414
                 },
                 fs_id: '4bb7be58314e95211ca2479d',
                 zindex: 4
                 },
                 {
                 title: 'Saint Sebastian Plaza',
                 location: {
                 lat: -3.130406,
                 lng: -60.022523
                 },
                 fs_id: '4b62c956f964a520a7522ae3',
                 zindex: 5
                 },
                 {
                 title: 'Black Point beach',
                 location: {
                 lat: -3.063832,
                 lng: -60.101935
                 },
                 fs_id: '52faa201498e51f9d0c8fe8b',
                 zindex: 6
                 },
                 {
                 title: 'Amazon Arena',
                 location: {
                 lat: -3.083246,
                 lng: -60.028139
                 },
                 fs_id: '4e74f5cf45ddd4323f862b3a',
                 zindex: 7
                 },
                 {
                 title: 'Amazon Museum',
                 location: {
                 lat: -3.003247,
                 lng: -59.93969
                 },
                 fs_id: '4ebc0f78b634c5f658bf71bd',
                 zindex: 8
                 },
                 {
                 title: 'Rubber Museum (Seringal Museum)',
                 location: {
                 lat: -3.01001,
                 lng: -60.175459
                 },
                 fs_id: '4e0e259945ddc2c6d174f159',
                 zindex: 9
                 },
                 {
                 title: 'Meeting of Waters',
                 location: {
                 lat: -3.136667,
                 lng: -59.904722
                 },
                 fs_id: '4e038e3ed22d034599ef8133',
                 zindex: 10
                 },
                 {
                 title: 'Adolpho Lisboa Municipal Market',
                 location: {
                 lat: -3.139919,
                 lng: -60.023789
                 },
                 fs_id: '4c699646d0bdc9b6375aa60b',
                 zindex: 11
                 },
                 {
                 title: 'Heliodoro Balbi Plaza',
                 location: {
                 lat: -3.135238,
                 lng: -60.021277
                 },
                 fs_id: '4dd3af5dcc3f2f060f28ec6a',
                 zindex: 12
                 },
                 {
                 title: 'Saint Sebastian Church',
                 location: {
                 lat: -3.12978,
                 lng: -60.022635
                 },
                 fs_id: '4c86b1c8d92ea093ca937072',
                 zindex: 13
                 },
                 {
                 title: 'Black River Park',
                 location: {
                 lat: -3.128102,
                 lng: -60.035549
                 },
                 fs_id: '5542ad0e498e7afe9358c107',
                 zindex: 14
                 }
                 ];

// ------End Pre-selected markers-------

// ------Begin Google Maps Callback-------
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
                              zoom: 11,
                              center: {
                              lat: -3.119027,
                              lng: -60.021731
                              },
                              // Position map controls in the top center
                              mapTypeControl: true,
                              mapTypeControlOptions: {
                              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                              position: google.maps.ControlPosition.TOP_CENTER
                              },
                              scaleControl: true,
                              fullscreenControl: true
                              });

    // Display an alert if Google maps encounters an authentication error
    window.gm_authFailure = function() {
        alert('Error detected on Google Maps!');
    }

    // Create the infowindow with no content but a fixed width
    infowindow = new google.maps.InfoWindow({
                                            content: '',
                                            maxWidth: 200
                                            });
    // Set map bounds
    bounds = new google.maps.LatLngBounds();
    // Initiate knockout calls
    ko.applyBindings(new viewMap());
}

// Display an alert if Google maps encounters a custom error
function googleMapsCustomError(){
    alert('Google Maps custom error triggered');
}

// ------End Google Maps Callback-------

// Create the markers with labels from A to Z
// and insert into an array
var markersList = function(locations) {
    var self = this;
    this.title = locations.title;
    this.position = locations.location;
    this.fs_id = locations.fs_id;
    this.visible = ko.observable(true);


    this.marker = new google.maps.Marker({
                                         position: this.position,
                                         title: this.title,
                                         fs_id: this.fs_id,
                                         label: labels[labelIndex++ % labels.length],
                                         animation: google.maps.Animation.DROP
                                         });

    self.filterMarkers = ko.computed(function() {
                                     if (self.visible() === true) {
                                     self.marker.setMap(map);
                                     bounds.extend(self.marker.position);
                                     map.fitBounds(bounds);
                                     } else {
                                     self.marker.setMap(null);
                                     }
                                     });

    // Open an indowindow when the marker is clicked in the map
    this.marker.addListener('click', function() {
                            fsInfowindow(this, infowindow);
                            toggleBounce(this);
                            //map.panTo(this.getPosition());
                            });

    // Open an indowindow when the marker is clicked in the list
    this.show = function(location) {
        google.maps.event.trigger(self.marker, 'click');
    };

    // Animate the marker when clicked
    this.bounce = function(place) {
        google.maps.event.trigger(self.marker, 'click');
    };

};

// Fill marker infowindow with information from foursquare
function fsInfowindow(marker, infowindow) {
    if (infowindow.marker != marker) {
        infowindow.setContent('');
        infowindow.marker = marker;
        // Get marker information from foursquare
        fsSearch(marker.fs_id, infowindow);
        infowindow.open(map, marker);
    }
}

// Animate clicked marker
function toggleBounce(poi) {
    if (poi.getAnimation() !== null) {
        poi.setAnimation(null);
    } else {
        poi.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
                   poi.setAnimation(null);
                   }, 2100); //This value sets the duration of animation
    }
}

// Main view model.
var viewMap = function() {
    var self = this;

    this.searchItem = ko.observable('');
    this.markerList = ko.observableArray([]);

    locations.forEach(
                      function(location) {
                      self.markerList.push(new markersList(location));
                      });

    // Filter the places list
    this.locationList = ko.computed(function() {
                                    var searchFilter = self.searchItem().toUpperCase();
                                    if (searchFilter) {
                                    return ko.utils.arrayFilter(self.markerList(), function(location) {
                                                                var str = location.title.toUpperCase();
                                                                var result = str.includes(searchFilter);
                                                                location.visible(result);
                                                                return result;
                                                                });
                                    }
                                    self.markerList().forEach(function(location) {
                                                              location.visible(true);
                                                              });
                                    return self.markerList();
                                    }, self);
};
