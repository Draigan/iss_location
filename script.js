"use strict";
async function getISS() {
    let response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    let json = await response.json();
    const { latitude, longitude } = json;
    const lonEl = document.getElementById('lon');
    const latEl = document.getElementById('lat');
    if (lonEl) {
        lonEl.textContent = longitude;
    }
    if (latEl) {
        latEl.textContent = latitude;
    }
}
getISS();
var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 1
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', { foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
