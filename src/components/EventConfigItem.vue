<template>
  <div class="main">
    <div class="row">
      <div class="col">
        <span>{{ description }}</span>
      </div>
      <div class="col">
        <span>{{ updatedBy }}</span>
      </div>
      <div class="col">
        <span>{{ updatedDate }}</span>
      </div>
      <div class="col-2 justify-content-between" @click.stop>
        <b-form-checkbox switch size="lg" v-model="activated"></b-form-checkbox>
        <b-button variant="danger" size="sm" @click="onCLickDelete"><b-icon icon="trash" class="mr-2"></b-icon>Delete</b-button>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: "EventConfigItem",
    props: {
      description: {
        type: String,
        required: true
      },
      updatedBy: '',
      updatedDate: '',
      valid: {
        type: Boolean
      }
    },
    data() {
      return {
        showModal : false,
        activated: this.valid,
      }
    },
    methods: {
      onCLickDelete() {
        console.log('aaa')
      },
    }
  }
</script>

<style scoped>
.main > div > div {
  display: flex;
  align-items: center;
}
</style>
