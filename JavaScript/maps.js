function myMap() {
  var myCenter = new google.maps.LatLng(48.9209059,24.702481900000002);
  var mapCanvas = document.getElementById("map");
  if (mapCanvas.style.display === 'none' ) {
        mapCanvas.style.display = 'block';
    } else {
        mapCanvas.style.display = 'none';
    }
  var mapOptions = {center: myCenter, zoom: 7};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);

  // Zoom to 9 when clicking on marker
  google.maps.event.addListener(marker,'click',function() {
    map.setZoom(15);
    map.setCenter(marker.getPosition());
  });
}

