import { writable } from "svelte/store";
import { stationSelectionStore } from "./mapSelections";
// check local storage settings
const storedData = localStorage.getItem("wl_usr_cnfg");

let stationSelectionFromPopup;
stationSelectionStore.subscribe((data) => {
  stationSelectionFromPopup = data;
});

const defaultState = JSON.parse(storedData) || {
  savedStations: [],
  selectedStation: "",
};
const createUserSettingsStore = () => {
  const { subscribe, set, update } = writable(defaultState);
  return {
    subscribe,
    refresh: () =>
      update((n) => {
        n.selectedStation = stationSelectionFromPopup;
        //sort savedStations set first as selectedStation
        n.savedStations.sort((a, b) => {
          if (a.id === n.selectedStation.id) {
            return -1;
          }
          if (b.id === n.selectedStation.id) {
            return 1;
          }
          return 0;
        });
        return n;
      }),
    add: () =>
      update((n) => {
        n.selectedStation = stationSelectionFromPopup;
        //only add new station if not in savedStations
        if (
          !n.savedStations.find(
            (station) => station.id === stationSelectionFromPopup.id
          )
        ) {
          n.savedStations.push(stationSelectionFromPopup);
        }
        return n;
      }),
    remove: () =>
      update((n) => {
        n.savedStations.filter((s) => s.id !== n.selectedStation);
        n.selectedStation = n.savedStations[0];
        return n;
      }),
    set: (obj) => set(obj),
  };
};

const userSettingsStore = createUserSettingsStore();

userSettingsStore.subscribe(
  (value) => (localStorage.wl_usr_cnfg = JSON.stringify(value))
);

export { userSettingsStore };
