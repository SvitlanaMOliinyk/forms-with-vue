<template>
  <div class="nav">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: ['msg']
}
</script>

<style scoped>
.nav {
  text-align: left;
  flex-grow: 1;
  height: 10vh;
  margin-bottom: -1rem;
}
h3 {
  color: white;
  background-color: limegreen;
  padding: 1rem;
  margin: 0;
}
</style>
