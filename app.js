
/// <reference path="node_modules/@types/leaflet/index.d.ts" /> #

var mymap = L.map('mapid').setView([47.856, 12.340], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
}).addTo(mymap);

L.marker([47.856, 12.340]).addTo(mymap);