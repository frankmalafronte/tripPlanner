//build markers




//  const buildMarker = function (img, coordArr) {
//     const markerDomEl = document.createElement("div"); // Create a new, detached DIV
//     markerDomEl.style.width = "32px";
//     markerDomEl.style.height = "39px";
// if (img){
//     markerDomEl.style.backgroundImage = img;
// } 
//     }

//     module.exports = buildMarker

const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};



const buildMarker = function(type, coords) {
    const markerDomEl = document.createElement("div")
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = iconUrls.type
        new mapboxgl.Market(marketDomEl).setLngLat([coords]).addtoMap(map)
        
};



module.exports = buildMarker;