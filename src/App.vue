<template>
    <div id="app" class="container">
        <CHeader/>
        <Portfolio/>
    </div>
</template>

<script>
    import CHeader from "./templates/CHeader.vue";
    import Portfolio from "./templates/Portfolio.vue";

    export default {
        name: "App",
        components: {Portfolio, CHeader}
    }
</script>
