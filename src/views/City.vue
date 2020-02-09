<template>
    <div>
        <h2>{{city.name}}, {{city.country}}</h2>
        <p>Temperature: {{city.weather.temperature}}</p>
        <p>Feels like: {{city.weather.temperatureFeels}}</p>
        <p>Weather: {{city.weather.description}}</p>
        <template v-if="!isCurrent">
            <cButton @click="updateCurrentCity">Update</cButton>
            <cButton @click="removeCurrentCity">Remove</cButton>
        </template>
        <template v-else>
            <cButton @click="addCurrentCity">Add</cButton>
        </template>

        <chart :chartData="chartData" :chartOptions="chartOptions" v-if="city.weatherForecast"/>
    </div>
</template>

<script>
    import {mapActions, mapMutations, mapGetters} from "vuex";

    import chart from "../components/common/chart";
    import store from "../store";

    export default {
        name: "City",
        components: {
            chart
        },
        data() {
            return {
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        computed: {
            ...mapGetters([
                'getCity',
                'getCurrentCity'
            ]),

            city() {
                return this.getCity(this.$route.params.cityName) || this.getCurrentCity;
            },
            isCurrent() {
                return !this.getCity(this.$route.params.cityName);
            },
            chartData() {
                return {
                    labels: this.city.weatherForecast && this.city.weatherForecast.map(e => e.date),
                    datasets: [
                        {
                            label: 'Temperature',
                            backgroundColor: '#3da0a4',
                            data: this.city.weatherForecast && this.city.weatherForecast.map(e => e.temperature),
                            pointRadius: 15,
                            pointStyle: 'rect',
                            pointHoverRadius: 16,
                            showLine: false
                        }
                    ]
                }
            }
        },
        methods: {
            ...mapMutations([
                'addCity',
                'removeCity',
                'updateCity',
                'fillCurrentCity'
            ]),
            ...mapActions([
                'getWeather',
                'getHourlyWeather'
            ]),

            removeCurrentCity() {
                this.fillCurrentCity(this.city);
                this.removeCity(this.city.name);
            },
            updateCurrentCity() {
                this.getCityWeather();
                this.getCityHourlyWeather();
            },
            addCurrentCity() {
                this.addCity(this.city);
            },
            getCityWeather() {
                this.getWeather(this.city.name)
                    .then(response => {
                        this.updateCity({
                            cityName: this.city.name,
                            weather: {
                                temperature: response.main.temp,
                                temperatureFeels: response.main.feels_like,
                                description: response.weather[0].main
                            }
                        });
                    }, response => {
                        alert(response.body.message)
                    });
            },
            getCityHourlyWeather() {
                this.getHourlyWeather(this.city.name)
                    .then(response => {
                        this.updateCity({
                            cityName: this.city.name,
                            weather: false,
                            weatherForecast: response.list.filter((e, index) => index <= 8).map(e => {
                                return {
                                    temperature: e.main.temp,
                                    date: e.dt_txt
                                };
                            })
                        });
                    }, response => {
                        alert(response.body.message);
                        this.$router.push('/');
                    });
            }
        },
        created() {
            if (!this.city.weatherForecast) {
                this.getCityHourlyWeather();
            }
        }
    }
</script>
