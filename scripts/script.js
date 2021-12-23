mapboxgl.accessToken = 'pk.eyJ1IjoiYXNobGVpZ2gtdGFuYWthIiwiYSI6ImNreDdpdTVvNTE4OWYycG81bzJuMjRpMXEifQ.QO8cNP_H-SXWKTvWBU-wfg';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([32.1284, -18.5278])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    // Add map directions to the map
    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );

}