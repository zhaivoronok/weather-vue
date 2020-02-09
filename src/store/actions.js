import Vue from "vue";
import VueResource from 'vue-resource';

Vue.use(VueResource);

const OWM_URL = 'https://api.openweathermap.org/data/2.5';
const OWM_PARAMS = '&units=metric';
const OWM_APIKEY = '&APPID=7ad9ae91a26c48edb2233484e61082eb';

export const getWeather = ({commit, state}, cityName) => {
    return new Promise((resolve, reject) => {
        Vue.http.get(OWM_URL + '/weather?q=' + cityName + OWM_PARAMS + OWM_APIKEY)
            .then(response => {
                resolve(response.body);
            }, response => {
                reject(response);
            });
    });
};

export const getWeatherByCoords = ({commit, state}, {lat, lon}) => {
    return new Promise((resolve, reject) => {
        Vue.http.get(OWM_URL + '/weather?lat=' + lat + '&lon=' + lon + OWM_PARAMS + OWM_APIKEY)
            .then(response => {
                resolve(response.body);
            }, response => {
                reject(response);
            });
    });
};

export const getHourlyWeather = ({commit, state}, cityName) => {
    return new Promise((resolve, reject) => {
        Vue.http.get(OWM_URL + '/forecast?q=' + cityName + OWM_PARAMS + OWM_APIKEY)
            .then(response => {
                resolve(response.body);
            }, response => {
                reject(response);
            });
    });
};