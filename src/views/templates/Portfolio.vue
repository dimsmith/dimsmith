<template>
  <div class="container">
    <h1>{{portfolio.profile.name}}</h1>

    <ul v-for="project in portfolio.projects">
      <li>
        <p><b>{{project.name}}</b> // {{project.year}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  props: {
    portfolio: Object
  }
}
</script>

<style scoped>

</style>