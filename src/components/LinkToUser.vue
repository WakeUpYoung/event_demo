<template>
  <div>
    <b-list-group>
      <b-list-group-item variant="primary">
        <div class="row">
          <div class="col font-weight-bold">User Id</div>
          <div class="col font-weight-bold"></div>
        </div>
      </b-list-group-item>
      <b-list-group-item v-for="user in userConfigs" :key="user.id" href="javascript:void(0)" class="p-0">
        <user-item :user-id="user.id" :user-configs="user.configs"></user-item>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
  import constant from '../js/constant'
  import UserItem from './UserItem'
  export default {
    name: "LinkToUser",
    components: { UserItem },
    data() {
      return {
        userConfigs: constant.users
      }
    }, // data

    methods: {

    }, // methods

    created() {

    },
  }
</script>

<style scoped>

</style>
