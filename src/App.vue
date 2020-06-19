<template>
  <div id="app" class="pt-4">
    <div class="container-fluid row">
      <div class="col-2">
        <b-nav pills vertical justified>
          <b-nav-item :active="$route.name==='eventConfigurations'" @click="toRoute('eventConfigurations')">Event Configurations</b-nav-item>
          <b-nav-item :active="$route.name==='linkToUser'" @click="toRoute('linkToUser')">Link to User</b-nav-item>
        </b-nav>
      </div>
      <div class="col-10">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import EventDemo from './components/EventModal'

export default {
  name: 'App',
  components: {
    EventDemo,
  },
  methods: {
    toRoute(name) {
      this.$router.push({name: name})
          .catch(e => console.error(e))
    }
  },
  created() {
    console.log(this.$route)
  }

}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
@import '~bootstrap-vue/dist/bootstrap-vue.css';
@import "css/Global.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
}
</style>
