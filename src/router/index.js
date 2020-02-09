import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "../store";

import Home from "../views/Home";
import City from "../views/City";

Vue.use(VueRouter);

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'City',
        path: '/:cityName',
        component: City,
        beforeEnter(to, from, next) {
            if (store.getters.getCity(to.params.cityName) || store.getters.getCurrentCity) {
                document.title = to.params.cityName;
                next();
            } else if (
                !store.getters.getCurrentCity
                || (store.getters.getCurrentCity && store.getters.getCurrentCity.name !== to.params.cityName)
            ) {
                fillCurrentCity(to, next);
            } else {
                next();
            }
        }
    },
    {
        path: '*',
        redirect: {
            path: '/'
        }
    }
];

const router = new VueRouter({
    routes,
    base: '/weather-vue/'
});

router.beforeEach((to, from, next) => {
    if (to.name !== 'City') {
        document.title = to.name;
    }

    let cities = localStorage.getItem('cities');
    let storageCities = JSON.parse(cities);

    if (cities && storageCities.length && !store.getters.getCities.length) {
        fillStorageCities(storageCities, next);
    } else if (!cities && navigator.geolocation) {
        addLocationCity(next);
    } else {
        next();
    }
});

let fillStorageCities = (storageCities, next) => {
    let citiesResponses = [];

    storageCities.forEach(cityName => {
        store.dispatch('getWeather', cityName)
            .then(response => {
                citiesResponses.push(response);
            }, response => {
                alert(response.body.message);
            }).finally(() => {
                if (storageCities.length === citiesResponses.length) {

                    citiesResponses.sort(function(a, b) {
                        return storageCities.indexOf(a.name) - storageCities.indexOf(b.name);
                    });

                    citiesResponses.forEach(cityResponse => {
                        store.commit('addCity', {
                            id: cityResponse.id,
                            name: cityResponse.name,
                            country: cityResponse.sys.country,
                            weather: {
                                temperature: cityResponse.main.temp,
                                temperatureFeels: cityResponse.main.feels_like,
                                description: cityResponse.weather[0].main
                            }
                        });
                    });

                    next();
                } else {
                    next();
                }
            });
    });
};

let addLocationCity = (next) => {
    navigator.geolocation.getCurrentPosition((position) => {
        let coords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
        };

        store.dispatch('getWeatherByCoords', coords)
            .then(response => {
                store.commit('addCity', {
                    id: response.id,
                    name: response.name,
                    country: response.sys.country,
                    weather: {
                        temperature: response.main.temp,
                        temperatureFeels: response.main.feels_like,
                        description: response.weather[0].main
                    }
                });

                next();
            }, response => {
                next();
            });
    }, () => {
        next();
    });
};

let fillCurrentCity = (to, next) => {
    store.dispatch('getWeather', to.params.cityName)
        .then(response => {
            if (!store.getters.getCity(response.name)) {
                store.commit('fillCurrentCity', {
                    id: response.id,
                    name: response.name,
                    country: response.sys.country,
                    weather: {
                        temperature: response.main.temp,
                        temperatureFeels: response.main.feels_like,
                        description: response.weather[0].main
                    }
                });
            }

            document.title = response.name;
            next(response.name);
        }, response => {
            next('/');
        });
};

export default router;