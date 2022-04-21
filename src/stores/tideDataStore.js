import { writable, derived } from "svelte/store";
import { userSettingsStore } from "./userSettings";
import { getLatestTide } from "../utils/apiCalls";

export let userSettings;
userSettingsStore.subscribe((settings) => {
  userSettings = settings;
});

const getLatestTides = (userStations) => {
  //reorganize userStations with selected station as first element
  const selectedStation = userStations.find((station) => {
    return station.id === userSettings.selectedStation.id;
  });
  const userStationsWithoutSelected = userStations.filter((station) => {
    return station.id !== userSettings.selectedStation.id;
  });
  const organizedUserStations = [
    selectedStation,
    ...userStationsWithoutSelected,
  ];

  if (userStations && userStations.length > 0) {
    let allTidesInfo = [];
    organizedUserStations.forEach(async (station) => {
      const stationId = station.id;
      let tideInfo = await getLatestTide(stationId);
      allTidesInfo.push(tideInfo);
    });
    return allTidesInfo;
  }
  return;
};

function setAllUserStationTidesInfo() {
  const latestTides = getLatestTides(userSettings.savedStations);

  const { subscribe, set, update } = writable(latestTides);

  return {
    subscribe,
    refresh: () =>
      update((n) => {
        //match order in userSettings.savedStations
        const userStations = userSettings.savedStations;
        const organizedTideStations = userStations.map((station) => {
          return n.find((s) => s.metadata.id === station.id);
        });
        n = organizedTideStations;
        return n;
      }),
    reset: () => set([]),
  };
}

const userStationsDataStore = setAllUserStationTidesInfo();

export { userStationsDataStore };
