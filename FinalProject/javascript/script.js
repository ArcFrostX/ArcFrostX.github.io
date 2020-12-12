function initMap(){
    const location = {lat: 42.70,lng: -73.10};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}