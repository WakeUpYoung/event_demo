<template>
  <div id="app" class="pt-4">
    <div class="">
      <EventDemo></EventDemo>
    </div>
  </div>
</template>

<script>
import EventDemo from './components/EventDemo'

export default {
  name: 'App',
  components: {
    EventDemo
  },
  methods: {

  },
  created() {
    console.log(this.$route)
  }

}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
}
</style>
