import axios from "axios";

export const getLatestTide = async (stationId) => {
  const queryUrl = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=latest&station=${stationId}&product=water_level&datum=MLLW&time_zone=lst_ldt&units=english&format=json`;
  const response = await axios.get(queryUrl);
  const data = await response.data;
  return data;
};
export const getHighLowTides = async (stationId) => {
  const queryUrl = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=latest&station=${stationId}&product=water_level&datum=MLLW&time_zone=lst_ldt&units=english&format=json`;
  const response = await axios.get(queryUrl);
  const data = await response.data;
  return data;
};
