<template>
  <div>
    <b-list-group>
      <b-list-group-item variant="primary">
        <div class="row">
          <div class="col">
            <b-form-group
                    class="m-0"
                    label-cols="3"
                    label="User Id"
                    label-for="user-id"
                    label-class="font-weight-bold"
            >
              <b-form-input id="user-id" v-model="queryUserId" tirm type="search"
                            placeholder="Type here for searching"></b-form-input>
            </b-form-group>
          </div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
      </b-list-group-item>
      <transition-group name="user-filter">
        <b-list-group-item v-for="user in computedUserList" :key="user.id" href="javascript:void(0)" class="p-0">
          <user-item :user-id="user.id" :user-configs="user.configs"></user-item>
        </b-list-group-item>
      </transition-group>
    </b-list-group>
  </div>
</template>

<script>
  import constant from '../js/constant'
  import UserItem from './UserItem'
  export default {
    name: "LinkToUser",
    components: { UserItem },

    computed: {
      computedUserList: function () {
        let vm = this;
        return this.userConfigs.filter(function (item) {
          return item.id.toLowerCase().indexOf(vm.queryUserId.toLowerCase()) !== -1
        })
      }
    },

    data() {
      return {
        userConfigs: constant.users,
        queryUserId: '',
      }
    }, // data

    methods: {

    }, // methods

    created() {

    },
  }
</script>

<style scoped>
.user-filter-enter-active, .user-filter-leave-active {
  transition: all .5s;
}

.user-filter-enter, .user-filter-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
</style>
