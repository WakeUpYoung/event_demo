<template>
  <div class="event-item-container">
    <div class="title text-uppercase font-weight-bold mb-2">{{ title }}</div>
    <div class="content bg-white border-1 border p-3">
      <b-form-group>
        <template v-slot:label>
          <b-form-checkbox
                  v-model="allSelected"
                  :indeterminate="indeterminate"
                  @change="toggleAll"
          > All
          </b-form-checkbox>
        </template>

        <b-form-checkbox-group
                v-model="selected"
                :options="options"
                stacked
        ></b-form-checkbox-group>
      </b-form-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EventItem",
    props: {
      title: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        allSelected: false,
        indeterminate: false,
        selected: []
      }
    },
    methods: {
      toggleAll(checked) {
        this.selected = checked ? this.options.slice() : []
      }
    },
    watch: {
      selected(newVal) {
        if (newVal.length === 0) {
          this.indeterminate = false
          this.allSelected = false
        } else if (newVal.length === this.options.length) {
          this.indeterminate = false
          this.allSelected = true
        } else {
          this.indeterminate = true
          this.allSelected = false
        }
      }
    }
  }
</script>

<style scoped>
  .content {
    height: 200px;
  }
</style>
