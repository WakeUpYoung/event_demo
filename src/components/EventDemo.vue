<template>
  <div class="container">
    <div class="modal-content" style="background-color: ghostwhite">
      <div class="modal-header">
        <h5 class="modal-title">Events Configurations</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container">
          <div class="d-flex flex-row justify-content-between">
            <b-form-select v-model="user" :options="userOptions" placeholder="User"></b-form-select>
            <b-form-select v-model="config" :options="configOptions" placeholder="Config"></b-form-select>
          </div>

          <div class="mt-4">
            <b-table table-class="table-middle" table-variant="light" outlined sticky-header :fields="eventTableFields" :items="eventTableItems">
              <template v-slot:cell(event)="data">
                <div class="d-flex flex-row">
                  <b-form-checkbox></b-form-checkbox> {{ data.value }}
                </div>
              </template>
              <template v-slot:cell(color)="color">
                  <b-input type="color" v-model="color.value"></b-input>
              </template>
            </b-table>
          </div>

          <div class="items">
            <div class="row">
              <div class="col">
                <EventItem title="specify owner" :options="ownerOptions"></EventItem>
              </div>
              <div class="col">
                <EventItem title="company" :options="companyOptions"></EventItem>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col">
                <EventItem title="cust category" :options="custOptions"></EventItem>
              </div>
              <div class="col">
                <EventItem title="job type" :options="jobTypeOptions"></EventItem>
              </div>
            </div>
          </div>

          <div class="advances mt-3">
            <b-button class="w-100" variant="outline-secondary"
              @click="advancesVisible = !advancesVisible">
              Advances &nbsp;<b-icon :icon="iconComputed"></b-icon>
            </b-button>
            <b-collapse v-model="advancesVisible" id="advances-settings" class="mt-2">
              <b-card>
                <div>
                  <div class="mb-2">
                    <div class="font-weight-bold">Active:</div>
                    <b-form-checkbox v-model="valid" size="lg" switch>
                      {{ valid ? 'activated' : 'inactivated' }}
                    </b-form-checkbox>
                  </div>

                  <div>
                    <div><span>Active Time Range:</span> <span>{{ tipFormatter(timeRage[0]) }} to {{ tipFormatter(timeRage[1]) }}</span></div>
                    <vue-slider v-model="timeRage" :enableCross="false" height="8px" dotSize="20" interval="0.5" tooltipPlacement="bottom"
                                :tooltipFormatter="tipFormatter" max="24" min="0"></vue-slider>
                  </div>
                </div>
              </b-card>
            </b-collapse>
          </div>

        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Add as New</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>

  </div>
</template>

<script>
  import EventItem from './EventItem'

  export default {
    name: "EventDemo",
    components: {
      EventItem,
    },
    computed: {
      iconComputed() {
        return this.advancesVisible ? 'caret-down' : 'caret-left'
      }
    },
    data() {
      return {
        timeRage: [0, 24],
        valid: true,
        startTime: '',
        endTime: '',
        advancesVisible: false,
        user: 'tcsa1',
        userOptions: [
          {text: 'tcsa1', value: 'tcsa1'},
          {text: 'tcsa2', value: 'tcsa2'},
          {text: 'tcsa3', value: 'tcsa3'},
          {text: 'tcsa4', value: 'tcsa4'}
        ],
        config: 1,
        configOptions: [
          {text: 'config_1', value: 1},
          {text: 'config_2', value: 2},
          {text: 'config_3', value: 3},
          {text: 'config_4', value: 4},
          {text: 'Add New Config', value: -1},
        ],

        eventTableFields: [
          {key: 'event', label: 'Event'},
          {key: 'description', label: 'Description'},
          {key: 'color', label: 'Color'},
        ],
        eventTableItems: [
          {event: 'Event_1', description: 'This is event 1', color: '#489aff'},
          {event: 'Event_2', description: 'This is event 2', color: '#67ff7e'},
          {event: 'Event_3', description: 'This is event 3', color: '#ff8b74'},
          {event: 'Event_4', description: 'This is event 4', color: '#fff840'}
        ],

        ownerOptions: ['CCC', 'Premiers'],
        companyOptions: ['CityCan', 'Comfort', 'Company 1', 'Company 2', 'Company3'],
        custOptions: ['ABN', 'CHANGE TEL TO PP', 'category 1', 'category 2', 'category'],
        jobTypeOptions: ['Immediate', 'Advance'],

      }
    }, // data
    methods: {
      tipFormatter(val) {
        let str = '00';
        if(Math.round(val) !== val) {
          str = '30'
        }
        let number = Math.floor(val);
        let numStr = ( "00" + number ).substr(-2);
        return numStr + ":" + str;
      }
    }// methods
  }
</script>

<style scoped>
.table-middle {
  vertical-align: middle;
}
</style>
