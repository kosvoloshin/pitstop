const $ = require('jquery');

if($('#map').length) {
    window.initMap = function() {
        var uluru = {lat: 55.660009, lng: 37.7484531};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            zoomControl: false,
            scaleControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            scrollwheel: false,
            center: uluru,
            styles: 
            [
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#736c68"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#e7e6e5"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#d4e4d3"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#d4e4d3"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#e7e6e5"
                        },
                        {
                            "gamma": "0.65"
                        },
                        {
                            "lightness": "0"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#aad5df"
                        }
                    ]
                }
            ]
        });
        var image = './assets/images/icons/marker.png';
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(55.660009, 37.7484531),
            map: map,
            icon: image
        });
    }
}

// AIzaSyBedBDOwDkXi5dlBT1B2VmOGHShZWbiVqg