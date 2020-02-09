<template>
    <form action="#"
          @submit.prevent="addNewCity">
        <cInput v-model="cityName" :required="true">Please enter city name</cInput>
        <cButton>Add</cButton>
    </form>
</template>

<script>
    import {mapActions, mapMutations, mapGetters} from 'vuex'

    export default {
        name: "citySearch",
        data() {
            return {
                cityName: ''
            }
        },
        computed: {
            ...mapGetters([
                'getCity'
            ]),
        },
        methods: {
            ...mapActions([
                'getWeather'
            ]),
            ...mapMutations([
                'addCity'
            ]),

            addNewCity() {
                this.getWeather(this.cityName)
                    .then(response => {
                        if (!this.getCity(response.name)) {
                            this.addCity({
                                id: response.id,
                                name: response.name,
                                country: response.sys.country,
                                weather: {
                                    temperature: response.main.temp,
                                    temperatureFeels: response.main.feels_like,
                                    description: response.weather[0].main
                                }
                            });
                        } else {
                            alert('City already added');
                        }
                    }, response => {
                        alert(response.body.message);
                    });

                this.cityName = '';
            }
        }
    }
</script>
