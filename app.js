// Initialize and add the map
async function initMap() {
  // The map, centered at New York
  const ny = { lat: 40.714, lng: -74.006 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: ny,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: ny,
    map: map,
  });

  const drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        google.maps.drawing.OverlayType.MARKER,
        google.maps.drawing.OverlayType.CIRCLE,
        google.maps.drawing.OverlayType.POLYGON,
        google.maps.drawing.OverlayType.POLYLINE,
        google.maps.drawing.OverlayType.RECTANGLE,
      ],
    },
    markerOptions: {
      icon: "images/heart.png",
      width: 16,
    },
    circleOptions: {
      fillColor: "#ffff00",
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1,
    },
  });

  drawingManager.setMap(map);
}

async function main() {
  await initMap();
}

document.addEventListener("DOMContentLoaded", main);
