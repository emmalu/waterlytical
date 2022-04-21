<script>
    import { derived } from 'svelte/store';
    import {userSettingsStore} from '../stores/userSettings.js';
    import { userStationsDataStore } from "../stores/tideDataStore.js";
    import { format, parseISO } from 'date-fns';

    $: console.log('all stations data', $userStationsDataStore);
   
    export let selectedStationData = derived(
        [userStationsDataStore],
        ([$userStationsDataStore]) => {
            if ($userStationsDataStore) {
                if($userStationsDataStore.length > 0) {
                    return $userStationsDataStore[0];
                }
            return
            }
        }
    );
    $: console.log('selected station data', $selectedStationData);
</script>

<main class="pl-2">
{#if $userSettingsStore.savedStations == 0}
    <h1 class="text-7xl">Welcome!</h1>
    <div class="text-2xl">To get started, find &amp; select a Tide Station to follow.</div>
{:else}
    {#if $userStationsDataStore}
        {#if $userStationsDataStore.length == 0}
            <h1>Loading...</h1>
        {:else if $userStationsDataStore.length > 0 }
            <div class="text-7xl">{$userStationsDataStore[0]['metadata']['name']}</div>
            <!-- <div class="text-1xl">Station ID: {selectedStationData['metadata']['id']}</div> -->
            <div class="text-4xl">
                Latest Tide: <span class="font-bold">{$userStationsDataStore[0]['data'][0]['v']}' MLLW</span></div>
            <div class="text-4xl">
                <em> as of <span class="font-bold">{format(parseISO($userStationsDataStore[0]['data'][0]['t']), 'PPpp')}</span></em>
            </div>
        {:else}
            <div>Found trouble in fetching data... :(</div>
        {/if}
    {:else}
        <div>Found trouble fetching data... :(</div>
    {/if}
{/if}
</main>

