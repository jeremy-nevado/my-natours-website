/* eslint-disable */

export const displayMap = locations => {
    mapboxgl.accessToken =
        'pk.eyJ1IjoiamVyZW15LW5ldmFkbyIsImEiOiJja2VubDE2NXQwMDV3MnpvaW9oeG5pbnB4In0.Gy2tV-W-P57OJsXdXI54Fw';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/jeremy-nevado/ckenlk91a1aov1ake6g5ufx0n',
        scrollZoom: false,
        // center: [-118.113491, 34.111745],
        // zoom: 10,
        // interactive: false
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach(loc => {
        // Create marker
        const el = document.createElement('div');
        el.className = 'marker';

        // Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom',
        })
            .setLngLat(loc.coordinates)
            .addTo(map);

        // Add popup
        new mapboxgl.Popup({
            offset: 30,
        })
            .setLngLat(loc.coordinates)
            .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
            .addTo(map);

        // Extend map bounds
        bounds.extend(loc.coordinates);
    });

    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100,
        },
    });
};
