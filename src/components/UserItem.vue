<template>
  <div @click="detailShow=!detailShow" class="custom-list-item">
    <div class="row">
      <div class="col align-center">
        <span>{{ userId }}</span>
      </div>
      <div class="col">
        <b-button @click.stop class="float-right" size="sm" variant="info"><b-icon icon="clock-history" class="mr-2"></b-icon>History</b-button>
      </div>
    </div>
    <div class="mt-1" @click.stop>
      <b-collapse v-model="detailShow">
        <b-card>
          <b-form-checkbox class="mr-2" v-for="config in configs" :key="config.id" button size="sm" v-model="config.state" :button-variant="checkState(config.state)">
            {{ config.description }}
          </b-form-checkbox>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
  import constant from '../js/constant'
  export default {
    name: "UserItem",
    props: {
      userId: {
        type: String,
        required: true,
      },
      userConfigs: {
        type: Array,
        required: true
      }
    },
    methods: {
      checkState(state) {
        return state ? 'primary' : 'secondary'
      }
    }, // methods
    data() {
      return {
        detailShow: false,
        configs: [],
      }
    }, // data

    created() {
      let allEventConfigs = constant.eventConfigs;
      let configs = [];
      for (let eventConfig of allEventConfigs) {
        let state = false;
        for (let userConfig of this.userConfigs) {
          if (eventConfig.id === userConfig) {
            state = true;
            break;
          }
        }
        configs.push({
          id: eventConfig.id,
          description: eventConfig.description,
          state: state
        });
      }
      this.configs = configs;
    }, // created

  }
</script>

<style scoped>
.custom-list-item {
  padding: 0.75rem 1.25rem;
}
</style>
