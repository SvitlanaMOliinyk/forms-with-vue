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
  height: 10%;
}
h3 {
  color: white;
  background-color: limegreen;
  padding: 1rem;
  margin: 0;
}
@media only screen and (max-width: 900px) {
  h3 {
    padding: 1rem 0 1rem 2rem;
  }
}
</style>
