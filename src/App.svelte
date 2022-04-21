<script>
  import '@esri/calcite-components/dist/calcite/calcite.css';
  import { defineCustomElements, setAssetPath } from '@esri/calcite-components/dist/custom-elements';
  setAssetPath("https://js.arcgis.com/calcite-components/1.0.0-beta.80/assets");
  defineCustomElements();

  import Router from 'svelte-spa-router';
  import Home from './routes/Home.svelte';
  import Map from './routes/Map.svelte';

  //import { latestTideStore, allStationsTidesStore } from './stores/tides.js';
  //import { userStationsData, selectedStationData } from './stores/custom.js';
  //import { userSettingsStore } from './stores/userSettings.js';


  // this will log the value of the `key` store each time it changes, using
  // a reactive expression (a Sveltism)/* 
  //$: console.log('user settings', $userSettingsStore);
  //$: console.log('saved stations data', $userStationsData);
  //$: console.log('selected tide data', $selectedStationData);
 
  const routes = {
    '/': Home,
    '/map': Map,
  }
</script>

<Router {routes}/>
