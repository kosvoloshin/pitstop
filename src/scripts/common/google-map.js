const $ = require('jquery');

if($('#map').length) {
    window.initMap = function() {
        var uluru = {lat: 48.9526204, lng: 38.48421887};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru,
          scrollwheel: false
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
    }
}
/* key */
/*AIzaSyDVhY3WnieoejfofJd3Cbo4w4Lv17WTxbs*/