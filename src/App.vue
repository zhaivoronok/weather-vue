<template>
  <div id="app">
    <appHeader/>

    <router-view/>
  </div>
</template>

<script>
  import appHeader from "./components/layout/appHeader";
  import {mapMutations, mapActions} from "vuex";

export default {
  name: 'app',
  components: {
    appHeader
  },
  methods: {
    ...mapMutations([
      'addCity',
    ]),
    ...mapActions([
      'getWeather',
    ]),
  }
}
</script>