<template>
    <header>
        <cButton @click="$router.push('/')" v-if="$route.name === 'City'">Back</cButton>
        <router-link to="/">Home</router-link>
    </header>
</template>

<script>
    export default {
        name: "appHeader"
    }
</script>