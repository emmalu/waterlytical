import { writable } from "svelte/store";

const defaultState = {
  savedStations: [],
  selectedStation: "",
  counter: 0,
  _rehydrated: false,
};

const { subscribe, update } = writable(defaultState);

function doUpdate() {
  update((currentState) => {
    const state = {
      ...currentState,
      counter: currentState.counter + 1,
      _rehydrated: true,
    };
    console.log("NOW state", state);
    return state;
  });
}

//setInterval(doUpdate, 1000);

export default { subscribe, update };
