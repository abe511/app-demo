// API KEY
// AIzaSyBUiIsJnNNvqRwhcxa78JpnnLx7cwlnNNI 


var map;
// var lat = document.getElementById("latCoord");
// var lng = document.getElementById("lngCoord");


function initMap() {
    var mapOptions = {
        center: {lat: 33.851426, lng: -118.397207},
        // center: {lat: 40.177534, lng: 44.512628},
        zoom: 17,
        // minZoom: 5,
        // maxZoom: 20,
        tilt: 45,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            mapTypeIds:
                [google.maps.MapTypeId.SATELLITE,
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.HYBRID,
                google.maps.MapTypeId.TERRAIN],
            position: google.maps.ControlPosition.LEFT_CENTER,
        },
        mapTypeId: google.maps.MapTypeId.HYBRID,
        zoomControl: true,
        zoomControlOptions:{
            position: google.maps.ControlPosition.RIGHT_CENTER,
        },
        streetViewControl: false,
        streetViewControlOptions:{
            position: google.maps.ControlPosition.LEFT_CENTER,
        },
        // styles: myStyle,
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
        
    // updateCoords(map.getCenter());
    // mapEventListeners();
}

function mapEventListeners() {
    var mouseMove = google.maps.event.addEventListener(map, "mousemove",
    function(event) {
        updateCoords(event.latLng);
    });
}

function updateCoords(latLng) {
    lat.innerHTML = latLng.lat();
    lng.innerHTML = latLng.lng();
}
