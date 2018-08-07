var ourLoc;
var veiw;
var map;

function init() {
    ourLoc = ol.proj.fromLonLat([41.03316, 28.862457]);
    view = new ol.View({
        center: ourLoc,
        zoom: 6


    });

    map = new ol.Map({
        target:'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()

            })
        ],
        loadTilesWhileAnimating: true,
        view: view
    });

};


document.addEventListener("DOMContentLoaded", function(e){
    console.log("it loadeddd")
    init();

});