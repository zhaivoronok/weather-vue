export const getCities = (state) => {
    return state.cities;
};

export const getCity = (state) => (cityName) => {
    return state.cities.find(e => e.name === cityName);
};

export const getCurrentCity = (state) => {
    return state.currentCity;
};