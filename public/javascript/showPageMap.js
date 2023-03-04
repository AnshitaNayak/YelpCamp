mapboxgl.accessToken = "pk.eyJ1Ijoia2FuaGFiaW5kYWwiLCJhIjoiY2xkMmk1c3cxMDhyODNvbzBkaGZmajdnNyJ9.PXzrnUplLBb6t8TSYFnhUw";
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: campbyid.geometry.coordinates,
    zoom: 7
});

new mapboxgl.Marker()
    .setLngLat(campbyid.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campbyid.title}</h3><p>${campbyid.location}</p>`
            )
    )
    .addTo(map)