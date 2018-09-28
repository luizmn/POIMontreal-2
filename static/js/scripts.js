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

var locations = [{
                 title: 'The Montreal Museum of Fine Arts',
                 location: {
                 lat: 45.498522,
                 lng: -73.5794
                 },
                 fs_id: '4e356969b61cddd1cd3cbba3',
                 zindex: 1
                 },
                 {
                 title: 'Mount Royal Park',
                 location: {
                 lat: 45.504798,
                 lng: -73.587842
                 },
                 fs_id: '4ad8f749f964a520871621e3',
                 zindex: 2
                 },
                 {
                 title: 'Mary Queen of the World Cathedral',
                 location: {
                 lat: 45.494546,
                 lng: -73.562246
                 },
                 fs_id: '4b201c13f964a520532d24e3',
                 zindex: 3
                 },
                 {
                 title: 'Notre-Dame Basilica of Montreal',
                 location: {
                 lat: 45.504542,
                 lng: -73.556128
                 },
                 fs_id: '4b0d9f4ef964a5207a4c23e3',
                 zindex: 4
                 },
                 {
                 title: 'Old Port of Montreal',
                 location: {
                 lat: 45.507453,
                 lng: -73.554418
                 },
                 fs_id: '4b6a38f5f964a520d8cd2be3',
                 zindex: 5
                 },
                 {
                 title: 'Montreal Botanical Garden',
                 location: {
                 lat: 45.560002,
                 lng: -73.563009
                 },
                 fs_id: '4ad4c06bf964a520acf920e3',
                 zindex: 6
                 },
                 {
                 title: 'Montreal Biodome',
                 location: {
                 lat: 45.559737,
                 lng: -73.549862
                 },
                 fs_id: '4ad4c06bf964a520abf920e3',
                 zindex: 7
                 },
                 {
                 title: 'Belvédère Camillien-Houde',
                 location: {
                 lat: 45.510798,
                 lng: -73.592949
                 },
                 fs_id: '4c0a7563340720a1bf678693',
                 zindex: 8
                 },
                 {
                 title: 'St. Josephs Oratory',
                 location: {
                 lat: 45.492574,
                 lng: -73.618339
                 },
                 fs_id: '4ad4c06cf964a520e7f920e3',
                 zindex: 9
                 },
                 {
                 title: 'Place-dArmes',
                 location: {
                 lat: 45.505775,
                 lng: -73.559904
                 },
                 fs_id: '4d49a48c11a36ea8d8082a1c',
                 zindex: 10
                 },
                 {
                 title: 'Jean-Talon Market',
                 location: {
                 lat: 45.536465,
                 lng: -73.614671
                 },
                 fs_id: '4adb6d0ef964a520522721e3',
                 zindex: 11
                 },
                 {
                 title: 'Montreal Holocaust Museum',
                 location: {
                 lat: 45.489022,
                 lng: -73.636366
                 },
                 fs_id: '4ad4c06cf964a52024fa20e3',
                 zindex: 12
                 },
                 {
                 title: 'Museum of Archaeology and History',
                 location: {
                 lat: 45.502651,
                 lng: -73.554167
                 },
                 fs_id: '4ad4c06cf964a520faf920e3',
                 zindex: 13
                 },
                 {
                 title: 'Centre d Histoire de Montreal',
                 location: {
                 lat: 45.50102,
                 lng: -73.555528
                 },
                 fs_id: '4ad4c06cf964a52023fa20e3',
                 zindex: 14
                 }
                 ];

// ------End Pre-selected markers-------

// ------Begin Google Maps Callback-------
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
                              zoom: 11,
                              center: {
                              lat: 45.5016889,
                              lng: -73.567256
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

    // Display an alert if Google maps encounters an error
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
    this.fs_id = locations.fs_id,
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
