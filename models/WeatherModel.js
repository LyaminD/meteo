import { getWeather, getWeatherByLocation } from "../api/api";

export const weatherModel = {
  state: { cities: [], localWeather: [], citiesInformations: {} },

  reducers: {
    // pour modifier le state
    setCities(state, cities) {
      // modifie la liste des villes (utile pour ajout / suppression)
      return { ...state, cities };
    },
    setLocalWeather(state, localWeather) {
      // modifie météo de la position de l'utilisateur
      return { ...state, localWeather };
    },
    setCitiesInformations(state, citiesInformations) {
      // modifie la météo des villes choisies
      return { ...state, citiesInformations };
    },
  },

  effects: (dispatch) => ({
    async addCityAndWeather(payload) {
      const newCities = weatherModel.state.cities;
      const newCitiesInformations = weatherModel.state.citiesInformations;
      const { cityName } = payload;

      if (newCities.indexOf(cityName) == "-1") {
        newCities.unshift(cityName);
        dispatch.weatherModel.setCities(newCities);

        const weather = await getWeather(cityName);
        newCitiesInformations[cityName] = weather;
        dispatch.weatherModel.setCitiesInformations(newCitiesInformations);
      }
    },

    async getLocalWeather({ latitude, longitude }) {
      const response = await getWeatherByLocation(latitude, longitude);
      if (response && typeof response === "object") {
        dispatch.weatherModel.setLocalWeather(response);
      } else {
        console.log("erreur " + response);
      }
    },
  }),
};