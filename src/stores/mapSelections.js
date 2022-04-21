import { writable } from "svelte/store";

const defaultState = {
  id: "",
  name: "",
};

const createStationSelectionStores = () => {
  const { subscribe, set } = writable(defaultState);
  return {
    subscribe,
    set: (station) => set(station),
  };
};

const stationSelectionStore = createStationSelectionStores();

export { stationSelectionStore };
