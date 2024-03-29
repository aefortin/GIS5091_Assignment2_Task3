require(["esri/Map", "esri/layers/CSVLayer", "esri/views/MapView", "esri/widgets/Legend"], (
        Map,
        CSVLayer,
        MapView,
        Legend
      ) => {
        const url = "https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%202/stl_crime_wgs_84.csv";

       

        const template = {
          title: "Crime committed at {ILEADSStreet}"
        };

        

        const renderer = {
          type: "heatmap",
          colorStops: [
            { color: "rgba(63, 40, 102, 0)", ratio: 0 },
            { color: "#472b77", ratio: 0.083 },
            { color: "#4e2d87", ratio: 0.166 },
            { color: "#563098", ratio: 0.249 },
            { color: "#5d32a8", ratio: 0.332 },
            { color: "#6735be", ratio: 0.415 },
            { color: "#7139d4", ratio: 0.498 },
            { color: "#7b3ce9", ratio: 0.581 },
            { color: "#853fff", ratio: 0.664 },
            { color: "#a46fbf", ratio: 0.747 },
            { color: "#c29f80", ratio: 0.83 },
            { color: "#e0cf40", ratio: 0.913 },
            { color: "#ffff00", ratio: 1 }
          ],
          maxPixelIntensity: 25,
          minPixelIntensity: 0
        };

       const layer = new CSVLayer({
        url: url,
        title: "St. Louis Crime Heatmap",
        copyright: "St. Louis Police Department",
		
		popupTemplate: template,
		renderer: renderer
});

        const map = new Map({
          basemap: "gray-vector",
          layers: [layer]
        });

        const view = new MapView({
          container: "viewDiv",
          center: [-90.1994, 38.6270],
          zoom: 9,
          map: map
        });

        view.ui.add(
          new Legend({
            view: view
          }),
          "bottom-left"
        );
      });