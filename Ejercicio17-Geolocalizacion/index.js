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
        lat: 10.299495099054809,
        lng: -85.83699706047521,
      },
      map,
      title: "Tamarindo",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 10.008891,
        lng: -84.012004,
      },
      map,
      title: "Lugar Especial",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 10.008891,
        lng: -84.012004,
      },
      map,
      title: "Liberia",
    })
  );
}
