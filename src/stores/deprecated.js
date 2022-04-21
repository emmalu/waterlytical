import { writable, derived } from "svelte/store";
import { userSettingsStore } from "./userSettings";
import { getLatestTide } from "../utils/apiCalls";

export let userSettings;
userSettingsStore.subscribe((settings) => {
  userSettings = settings;
});

const setStationTidesInfo = async (userStations) => {
  const stationsWithData = userStations.map(async (station) => {
    let tideInfo = await getLatestTide(station.id);
    if (!tideInfo.error) {
      return { ...station, tideInfo };
    }
  });
  return stationsWithData;
};
const createAllStationsTideStore = () => {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    set: async (value) => {
      debugger;
      let tidesData = await setStationTidesInfo(value);
      set(tidesData);
    },
    update: () => {
      if (userSettings && userSettings.savedStations) {
        debugger;
        setStationTidesInfo(userSettings.savedStations).then((stations) => {
          update((n) => {
            return stations;
          });
        });
      }
    },
  };
};

//const latestTides = setStationTidesInfo(userSettings.savedStations) || [];

const allStationsTidesStore = createAllStationsTideStore();

allStationsTidesStore.subscribe((allStationsTides) => {
  localStorage.setItem("wl_stn_dt", JSON.stringify(allStationsTides));
});

/* 
const latestTideStore = derived(
  [allStationsTidesStore, userSettingsStore],
  ([$allStationsTidesStore, $userSettingsStore]) => {
    if ($allStationsTidesStore && $userSettingsStore) {
      return $allStationsTidesStore.filter((s) => {
        debugger;
        s.metadata.id === $userSettingsStore.selectedStation.id;
      });
    }
  }
);*/

/* const storedData = localStorage.getItem("wl_stn_dt");
const existingData = storedData === "undefined" ? [] : JSON.parse(storedData);
if (existingData.length > 0) {
  userStations.filter((station) => {
    return existingData.some((s) => {
      return s.id !== station.id;
    });
  });
} */

const defaultStateLatestTide = {
  metadata: {
    id: "",
    name: "",
  },
  data: [],
};

const createSelectedStationTideStore = () => {
  const { subscribe, set, update } = writable(defaultStateLatestTide);
  return {
    subscribe,
    set: (stationTideInfo) => set(stationTideInfo),
    refresh: () => {
      update((n) => {
        debugger;
        // match all tides info by selected tide
        let allStationTides = [] || allStationsTidesStore;
        /* let tideInfo = allStationTides.filter(
          (s) => s.metadata.id === userSettings.selectedStation.id
        );
        n = tideInfo; */
        return n;
      });
    },
  };
};
const latestTideStore = createSelectedStationTideStore();

export { allStationsTidesStore, latestTideStore };
