<template>
    <div>
       <citySearch/>
        <cityCard v-for="(city, index) in getCities"
                  :key="index"
                  :cityName="city.name"
                  :cityCountry="city.country"
                  :cityWeather="city.weather"
        />
    </div>
</template>

<script>
    import citySearch from "../components/common/citySearch";
    import cityCard from "../components/common/cityCard";
    import {mapGetters} from "vuex";

    export default {
        name: "Home",
        components: {
            citySearch,
            cityCard
        },
        data(){
            return {
                input: 'asdfasd'
            }
        },
        computed:{
            ...mapGetters([
                'getCities'
            ]),
        },

    }
</script>