<script>
  //@ts-nocheck
  import { userSettingsStore } from "../stores/userSettings.js";
  import { stationSelectionStore } from "../stores/mapSelections.js";
  import { userStationsDataStore } from "../stores/tideDataStore.js";
  import LocalTide from "../lib/Tides.svelte";

  import Map from "@arcgis/core/Map";
  import MapView from "@arcgis/core/views/MapView";
  import Locate from "@arcgis/core/widgets/Locate";
  import Home from "@arcgis/core/widgets/Home";
  import Graphic from "@arcgis/core/Graphic";
  import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

  /**
   * This includes the CSS from the ArcGIS API for JavaScript
   * You can alternativly do this in the style tag below:
   *
   * ```
   * @import "@arcgis/core/assets/esri/themes/light/main.css";
   * ```
   *
   * ... Vite includes it in the same way - so use either way you prefer.
   *
   * Also note: you can use the "light" or "dark" theme here. See:
   * https://developers.arcgis.com/javascript/latest/styling/
   */
  import "@arcgis/core/assets/esri/themes/light/main.css";
  export let centerText;

  let shareSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 32 32\" class=\"svg-icon\"><path d=\"M26 30H2V6h14V4H0v28h28V18h-2zM21 8C12.715 8 6 14.717 6 23c0 .336.029.668.051 1h4A11.464 11.464 0 0 1 10 23c0-6.065 4.936-11 11-11h3.004l-6 6h4L30 10l-7.996-8h-4l6 6H21z\"/></svg>";

  // Function that gets called when the element is created.
  const createMap = (domNode) => {

    const saveStationToUserConfig = (act) => {
      if (act === "select") {
        userSettingsStore.add();
        //userSettingsStore.refresh();
        userStationsDataStore.refresh();
      } else if(act === "remove"){
        userSettingsStore.remove();
        userSettingsStore.refresh();
      } else{
        userSettingsStore.refresh();
        userStationsDataStore.refresh();
      }
      selectedStationsLayer.refresh();
    }
    const selectStationToView = {
      id: 'select-station',
      title: 'Select & Add Station',
      image: 'https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/check-square-16-f.svg'
    };
    /* const addStationToUserConfigAction = {
      id: 'add-to-user-config',
      title: 'Add & Select Station',
      //image: 'https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/pin-plus-16.svg'
      image: 'https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/plus-square-16.svg'
    }; */
    const removeStationFromUserConfigAction = {
      id: 'remove-from-user-config',
      title: 'Remove Station',
      image: 'https://raw.githubusercontent.com/Esri/calcite-ui-icons/master/icons/minus-square-16.svg'
    };

    const nwsStationsLayer = new FeatureLayer ({
      url: 'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Observations/ahps_riv_gauges/MapServer/0',
      id: 'nws-stations',
      definitionExpression: `status NOT IN ('obs_not_current', 'out_of_service', 'not_defined')`,
      renderer: {
        type: "unique-value",
        symbol: {
          type: "simple-marker",
          style: "circle",
          size: "18px",
          color: "darkblue  ",
          outline: null
        },
        valueExpression: `
          var observed = Number($feature.observed);
          var action = Number($feature.action);
          var moderate = Number($feature.moderate);
          var major = Number($feature.major);
          var flood_thresholds = [observed, action, moderate, major];
          //console($feature.location, flood_thresholds);

          // Match the maximum value with the label
          // of the respective field and return it for
          // use in a UniqueValueRenderer
          return IndexOf(
            Sort(flood_thresholds),
            observed
           );
        `,
        uniqueValueInfos: [
          {
            value: "0",
            symbol: {
              type: "simple-marker",
              style: "circle",
              size: "12px",
              color: "[255, 255, 255, 0.5]",
              outline: null
            },
            label: "Normal"
          },
          {
            value: "1",
            symbol: {
              type: "simple-marker",
              style: "circle",
              size: "12px",
              color: "orange",
              outline: null
            },            
            label:  "Minor Flooding"
          },
          {
            value: "2",
            symbol: {
              type: "simple-marker",
              style: "circle",
              size: "12px",
              color: "red",
              outline: null
            },
            label: "Moderate Flooding"
          },
          {
            value: "3",
            symbol: {
              type: "simple-marker",
              style: "circle",
              size: "12px",
              color: "purple",
              outline: null
            },
            label: "Major Flooding"
          }
        ]
      },
      outFields: ["gaugelid", "location", "observed", "flood", "action", "moderate", "major", "status", "state", "url", "obstime"],
      /* featureReduction: {
        type: "cluster",
        clusterRadius: 200
      }, */
      labelingInfo: [
        {
          labelExpressionInfo: {
            expression: "$feature.location"
          },
          symbol: {
            type: "text",
            color: "darkblue",
            haloColor: "white",
            haloSize: "1px",
            font: {
              size: "12px",
              family: "Noto Sans",
              style: "normal",
              weight: "normal"
            }
          },
          labelPlacement: "above-center",
          minScale: 10000000,
        }
      ],
      minScale: 1000000,
      popupTemplate: {
        title: "{location}, {state}",
        content: `<p>{observed}' @ {obstime}</p><a href="{url}" target="_blank">View Data for this Station (ID: {gaugelid})${shareSvg}</a>`,
        overwriteActions: true,
        //actions: [selectStationToView, addStationToUserConfigAction, removeStationFromUserConfigAction]
      }
    })
    const coopsPredictionStationsLayer = new FeatureLayer({
      url: `https://idpgis.ncep.noaa.gov/arcgis/rest/services/NOS_Observations/CO_OPS_Products/MapServer/5`,
      id: 'coops-prediction-stations',
      //definitionExpression: `status NOT IN ('obs_not_current', 'out_of_service', 'not_defined')`,
      minScale: 100000,
    })
    // Create NOAA waterlevel stations layer
    const coopsStationsLayer = new FeatureLayer({
      url: `https://idpgis.ncep.noaa.gov/arcgis/rest/services/NOS_Observations/CO_OPS_Stations/MapServer/0`,
      id: "coops-stations",
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-marker",
          style: "square",
          size: "16px",
          color: "black",
          outline: null
        }
      },
      outFields: ["id", "name", "latitude", "longitude", "data"],
      featureReduction: {
        type: "cluster",
        clusterRadius: 100
      },
      /* labelingInfo: [
        {
          labelExpressionInfo: {
            expression: "$feature.name"
          },
          symbol: {
            type: "text",
            color: "black",
            haloColor: "white",
            haloSize: "1px",
            font: {
              size: "12px",
              family: "Noto Sans",
              style: "normal",
              weight: "normal"
            }
          },
          labelPlacement: "above-center",
          minScale: 10000000,
        }
      ], */
      popupTemplate: {
        title: "{name}, {state}",
        content: `<a href="{data}" target="_blank">View Data for this Station (ID: {id})${shareSvg}</a>`,
        overwriteActions: true,
        actions: [selectStationToView, removeStationFromUserConfigAction]
      }
    });
    
    let selectedStationVis = false;
    let whereClause = '1=1';
    if($userSettingsStore.savedStations.length > 0){
      selectedStationVis = true;
      //map through selected stations to get list of ids
      const selectedStations = $userSettingsStore.savedStations.map(station => {
        return station.id;
      });
      whereClause = `id IN ('${selectedStations.join("','")}')`;
    }
    const selectedStationsLayer = coopsStationsLayer.clone();
    selectedStationsLayer.id = "user-stations";
    selectedStationsLayer.definitionExpression = whereClause;
    selectedStationsLayer.visible = selectedStationVis;
    selectedStationsLayer.popupTemplate = null;
    selectedStationsLayer.renderer = {
      type: "simple",
      symbol: {
        type: "simple-marker",
        style: "square",
        size: "12px",
        color: "yellow",
        outline: null
      }
    };

    // Create the map
    const map = new Map({
      basemap: "gray-vector",
      layers: [nwsStationsLayer, coopsStationsLayer, coopsPredictionStationsLayer, selectedStationsLayer],
    });
    // Create the mapView from the map
    const view = new MapView({
      container: domNode,
      map: map,
      zoom: 3,
      //center: [-79.95, 32.8], // longitude, latitude
      center: [-100, 35], // longitude, latitude
    });

    //create map widgets
    const homeWidget = new Home({
      view: view,
    });
    const locateWidget = new Locate({
      view: view,   // Attaches the Locate button to the view
      graphic: new Graphic({
        symbol: { type: "simple-marker" }  // overwrites the default symbol used for the
        // graphic placed at the location of the user when found
      }),
      scale: 500000,
      geolocationOptions: { 
        maximumAge: 0, 
        timeout: 15000, 
        enableHighAccuracy: false
      },
      goToLocationEnabled: true,
    });
  
    view.ui.add(homeWidget, "top-left");
    view.ui.add(locateWidget, "top-left");

    // Use the watch functionality of the JavaScript API (view.watch) to call a
    // function every time the extent changes. Every time it does, update the
    // "centerText" variable - Svelte takes care of updating the UI based
    // on this variable assignment
    // (Reactivity!) https://svelte.dev/tutorial/reactive-assignments
    view.watch("center", (center) => {
      const { latitude, longitude } = center;
      centerText = `Lat: ${latitude.toFixed(2)} | Lon: ${longitude.toFixed(2)}`;
    });
    //watch for popup open/feature selection
    view.popup.dockOptions = {
      buttonEnabled: false,
      //breakpoint: false,
      position: "bottom-right"
    };
    view.popup.watch("selectedFeature", function(f) {
      if (f && f.layer.id === "coops-stations") {
        const attr = f.attributes;
        let thisStation = {
          id: attr.id,
          name: attr.name,
        };
        stationSelectionStore.set(thisStation);
      }
    });

    view.popup.on("trigger-action", (event) => {
      if (event.action.id === "select-station") {
        saveStationToUserConfig('select');
      }
      if (event.action.id === "add-to-user-config") {
        saveStationToUserConfig('add');
      }
      if (event.action.id === "remove-from-user-config") {
        saveStationToUserConfig('remove');
      }
    });
    
    if($userSettingsStore.savedStations.length > 0){
      const selectedQuery = selectedStationsLayer.createQuery();
      //selectedQuery.where = `id = '${$userSettingsStore.selectedStation.id}'`;
      selectedStationsLayer.queryFeatures(selectedQuery).then(results => {
        console.log('features', results.features);
        view.goTo({
          target: results.features,
          //zoom: 10,
        });
        selectedStationsLayer.set('effect', {
          filter: {
            where: `id = '${$userSettingsStore.selectedStation}'`
          },
          excludedEffect: "opacity(50%)",
          includedEffect: "brightness(1.05)",
        });
      });
    }
    const createSymbol = (color) => {
      return {
        type: "simple-marker",
        color: color,
        outline: null
      };
    }
   
  };
</script>


<!-- use:createMap calls the "createMap" function (defined above) when the  -->
<!-- element is created. -->
<!-- See the "createMap" function def above for more info. -->
<div class="view" use:createMap />

{#if centerText}
  <LocalTide />
{/if}

<style>
  /* Alternative to the CSS import in the script tag above: */
  /* @import "@arcgis/core/assets/esri/themes/light/main.css"; */
  .view {
    height: 65vh;
    width: 100vw;
  }
</style>