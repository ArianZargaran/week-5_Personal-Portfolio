function initialize(){
  var mapProp = {
    center: new google.maps.LatLng(37.3378741,-121.9340505),
    zoom: 19,
    mapTypeId: google.maps.MapTypeId.ROADMAP 
  }
  var map = new google.maps.Map(document.getElementById('google-map'), mapProp)
}
google.maps.event.addDomListener(window, 'load', initialize)