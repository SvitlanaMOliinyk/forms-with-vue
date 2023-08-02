<template>
  <NavigationBar msg="Form builder prototype" />
  <StartComponent />
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import StartComponent from './components/StartComponent.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    StartComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}

</style>
