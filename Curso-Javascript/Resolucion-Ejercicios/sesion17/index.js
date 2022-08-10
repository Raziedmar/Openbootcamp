/*- Crea un mapa en HTML
- Pon chinchetas en tus 3 lugares favoritos del planeta tierra*/

let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: -8.111762013422398,
        lng: -79.02846960189406,
      }, 
      map,
      title: "Trujillo-Plaza de Armas",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -6.488039423052179,
        lng: -76.3599476236104,
      }, 
      map,
      title: "Tarapoto-Perú",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -3.7494656814492267,
        lng: -73.24425707768523,
      }, 
      map,
      title: "Iquitos-Perú",
    })
  );
}