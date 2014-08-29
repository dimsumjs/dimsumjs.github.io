function init_map(){
  var position = new google.maps.LatLng(51.511657127592265, -0.13011127710342407)
  var myOptions = {
    zoom: 14,
    center: position,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var canvas = document.getElementById("gmap_canvas");

  if(!canvas) {
    return;
  }

  var map = new google.maps.Map(canvas, myOptions)
  var marker = new google.maps.Marker({
    map: map,
    position: position
  })

  infowindow = new google.maps.InfoWindow({
    content: "<b>Young Cheng</b><br/>22 Lisle St<br/>London<br/>WC2H 7BY"
  })

  google.maps.event.addListener(map, "click", function(event) {
    console.info("new google.maps.LatLng(" + event.latLng.lat() + ", " + event.latLng.lng() + ")");
  })
  google.maps.event.addListener(marker, "click", function() {
    infowindow.open(map,marker)
  })

  infowindow.open(map,marker)
}

google.maps.event.addDomListener(window, 'load', init_map)
