 // Initialize the map
 var map = L.map('map').setView([51.59, 4.775], 12);

 // Add a tile layer
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19
 }).addTo(map);

 // Define markers with popups
 var markers = [{
         coords: [51.564379, 4.769815],
         popup: '<img src="https://i.ibb.co/NFJXkPb/image.png" id="mappicture">Kort bruine tabby, groene ogen.<br>Burgemeester de Manlaan 5, Breda'
     },
     {
         coords: [51.590574, 4.777244],
         popup: '<img src="https://i.ibb.co/JnxDY3X/image.png" id="mappicture">Kort rode tabby, groene ogen.<br>Park Valkenberg, Breda'
     },
     {
         coords: [51.590880, 4.778730],
         popup: '<img src="https://i.ibb.co/LJPRgdt/image.png" id="mappicture">Kort zwart/wit tuxedo, groene ogen.<br>Park Valkenberg, Breda'
     },
     {
         coords: [51.578989, 4.767992],
         popup: '<img src="https://i.ibb.co/HxhTzDb/image.png" id="mappicture">Lang chocolate point, blauwe ogen.<br>Burgemeester van Sonsbeeckpark, Breda'
     },
     {
         coords: [51.588627, 4.752034],
         popup: '<img src="https://i.ibb.co/C0ZLZ3x/istockphoto-1720749184-612x612.jpg" id="mappicture">Kort calico, groene ogen.<br>Meidoornstraat 130, Breda'
     },
     {
         coords: [51.611416, 4.804010],
         popup: '<img src="https://i.ibb.co/SJ96fVd/Odd-eyed-black-cat-02.jpg" id="mappicture">Kort zwart, groen en blauw oog.<br>Maasdijk 272, Breda'
     },
     {
         coords: [51.604730, 4.734554],
         popup: '<img src="https://i.ibb.co/bd4S2vz/image.png" id="mappicture">Lang zwart/wit, gele ogen.<br>Waterakker 11, Breda'
     },
     {
         coords: [51.586316, 4.814842],
         popup: '<img src="https://i.ibb.co/Hg9J4hd/image.png" id="mappicture">Kort tortoiseshell, blauwe ogen.<br>Wilderen 248, Breda'
     }
 ];

 // Add markers to the map
 markers.forEach(function (marker) {
     L.marker(marker.coords).bindPopup(marker.popup).addTo(map);
 });

 // Define heatmap points
 var heatData = markers.map(function (marker) {
     return marker.coords.concat(5); // Add a weight of 1 for each point
 });

 // Add heatmap layer to the map
 var heat = L.heatLayer(heatData, {
     radius: 25,
     blur: 15,
     maxZoom: 17,
 }).addTo(map);

 // Show or hide markers based on zoom level
 function updateMarkers() {
     var zoomLevel = map.getZoom();
     if (zoomLevel >= 15) { // Adjust this zoom level based on your preference
         markers.forEach(function (marker) {
             if (!map.hasLayer(marker)) {
                 marker.addTo(map);
             }
         });
     } else {
         markers.forEach(function (marker) {
             if (map.hasLayer(marker)) {
                 marker.remove();
             }
         });
     }
 }

 // Listen for zoom events
 map.on('zoomend', updateMarkers);

 // Initial call to set the correct state
 updateMarkers();