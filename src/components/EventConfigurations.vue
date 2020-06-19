<template>
  <div>
    <event-modal v-model="showModal" :description="description" :user-action="userAction"></event-modal>
    <b-list-group>
      <b-list-group-item variant="primary">
        <div class="row">
          <div class="col font-weight-bold">Description</div>
          <div class="col font-weight-bold">Latest Update By</div>
          <div class="col font-weight-bold">Latest Update Date</div>
          <div class="col-1 font-weight-bold">Activated</div>
          <div class="col-1 text-center h5 pointer m-0 pointer" id="add-new-config"
               @click="onClickAdd"
               @mouseenter="addIcon='plus-circle-fill'"
               @mouseleave="addIcon='plus-circle'">
            <b-icon :icon="addIcon"></b-icon>
          </div>
          <b-tooltip target="add-new-config" triggers="hover" placement="bottom">
            Add New Configuration
          </b-tooltip>
        </div>
      </b-list-group-item>
      <b-list-group-item :key="item.id"  v-for="item in eventConfigs" href="javascript:void(0)" @click="onClickItem(item)">
        <event-config-item :description="item.description" :updated-by="item.updatedBy" :updated-date="item.updatedDate" :valid="item.valid"></event-config-item>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
  import constant from '../js/constant'
  import EventConfigItem from './EventConfigItem'
  import EventModal from './EventModal'
  export default {
    name: "EventConfigurations",
    components: { EventConfigItem, EventModal },
    data() {
      return {
        eventConfigs: [],
        showModal: false,
        description: '',
        addIcon: 'plus-circle',
        userAction: 0
      }
    }, // data
    methods: {
      onClickItem(item) {
        this.showModal = true;
        this.description = item.description;
        this.userAction = constant.userActions.update
      },

      onClickAdd() {
        this.description = '';
        this.showModal = true;
        this.userAction = constant.userActions.create
      }
    }, // methods
    created() {
      this.eventConfigs = constant.eventConfigs;
    }
  }
</script>

<style scoped>

</style>
