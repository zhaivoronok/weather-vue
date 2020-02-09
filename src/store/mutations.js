import Vue from "vue";

export const addCity = (state, city) => {
    state.cities.push(city);
};

export const removeCity = (state, cityName) => {
    state.cities = state.cities.filter(e => e.name !== cityName);
};

export const updateCity = (state, {cityName, weather, weatherForecast}) => {
    let theCity = state.cities.find(e => e.name === cityName) || state.currentCity;

    if (weather) {
        Vue.set(theCity, 'weather', weather)
    } else if (weatherForecast) {
        Vue.set(theCity, 'weatherForecast', weatherForecast)
    }
};

export const fillCurrentCity = (state, city) => {
    state.currentCity = city;
};