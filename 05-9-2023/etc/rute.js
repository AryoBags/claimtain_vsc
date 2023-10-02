
var map = L.map('map').setView([57.74, 11.94], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng( -8.0906762,113.9318373 ),
        L.latLng(-7.9802857,113.8426924)
    ],
    routeWhileDragging: true
}).addTo(map);
