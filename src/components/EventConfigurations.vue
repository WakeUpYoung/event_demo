<template>
  <div>
    <!-- modal -->
    <event-modal v-model="showModal" :description="description" :user-action="userAction"></event-modal>
    <!-- Confirm Modal -->
    <b-modal v-model="deleteConfirm" title="Warning" ok-variant="danger"
             header-bg-variant="danger" header-text-variant="light" ok-title="Force Delete">
      <div>The config you are looking for deleting has mapped to user. If you no need it anymore for sure, click <code>Force Delete</code> button</div>
    </b-modal>
    <!-- History Modal -->
    <b-modal size="lg" hide-footer v-model="historyModal"
             title="Event Configurations History" ok-only ok-title="Close" ok-variant="secondary" >
      <div>
        <b-table striped hover :items="historyItems"></b-table>
      </div>
    </b-modal>

    <div class="mb-2">
      <b-button size="sm" variant="success" class="mr-2" @click="onClickAdd"><b-icon icon="plus-circle" class="mr-2"></b-icon>Create</b-button>
      <b-button size="sm" variant="info" @click="historyModal=true"><b-icon icon="clock-history" class="mr-2"></b-icon>History</b-button>
    </div>
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
        <event-config-item :description="item.description" :updated-by="item.updatedBy"
                           :updated-date="item.updatedDate" :valid="item.valid"
                            @delete="onClickDelete"></event-config-item>
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
        userAction: 0,
        deleteConfirm: false,
        historyModal: false,
        historyItems: [
          {targetConfig: 'Config_1 For VIP' ,operationBy: 'kyj_uat', operationDate: '19/06/2020 11:20:33', description: 'Inactivated'},
          {targetConfig: 'Config_2 For CCC' ,operationBy: 'kyj_uat', operationDate: '19/06/2020 11:20:33', description: 'Activated'},
          {targetConfig: 'Config_deleted' ,operationBy: 'kyj_uat', operationDate: '19/06/2020 11:20:33', description: 'Force Delete'},
        ]
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
      },

      onClickDelete() {
        this.deleteConfirm = true
      }
    }, // methods
    created() {
      this.eventConfigs = constant.eventConfigs;
    }
  }
</script>

<style scoped>

</style>
