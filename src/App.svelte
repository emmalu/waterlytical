<script>
  import '@esri/calcite-components/dist/calcite/calcite.css';
  import { defineCustomElements, setAssetPath } from '@esri/calcite-components/dist/custom-elements';
  setAssetPath("https://js.arcgis.com/calcite-components/1.0.0-beta.80/assets");
  defineCustomElements();

  import Router from 'svelte-spa-router';
  import Home from './routes/Home.svelte';
  import Meet from './routes/Meet.svelte';
  import Map from './routes/Map.svelte';
  import Bytes from './routes/Bytes.svelte';
  import Lists from './routes/Lists.svelte';
  import Reach from './routes/Reach.svelte';

  const routes = {
    '/': Home,
    '/meet': Meet,
    '/map': Map,
    '/bytes': Bytes,
    '/lists': Lists,
    '/contact': Reach,
  }
</script>

<Router {routes}/>
