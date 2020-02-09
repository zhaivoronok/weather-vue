<template>
    <div>
        <h2>
            <a :href="'/' + cityName" @click.prevent="goToCity">{{cityName}}, {{cityCountry}}</a>
        </h2>
        <p>Temperature: {{cityWeather.temperature}}</p>
        <p>Feels like: {{cityWeather.temperatureFeels}}</p>
        <p>Weather: {{cityWeather.description}}</p>
        <cButton :prevent="true"
                 :stop="true"
                 @click="updateCurrentCity">Update</cButton>
        <cButton :prevent="true"
                 :stop="true"
                 @click="removeCurrentCity">Remove</cButton>
    </div>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex'

    export default {
        name: "cityCard",
        props: {
            cityName: {
                type: String
            },
            cityCountry: {
                type: String
            },
            cityWeather: {
                type: Object
            }
        },
        methods: {
            ...mapMutations([
                'removeCity',
                'updateCity'
            ]),
            ...mapActions([
                'getWeather'
            ]),

            removeCurrentCity() {
                this.removeCity(this.cityName)
            },
            updateCurrentCity () {
                this.getWeather(this.cityName)
                    .then(response => {
                        this.updateCity({
                            cityName: this.cityName,
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
            goToCity(){
                this.$router.push('/' + this.cityName)
            }
        }
    }
</script>