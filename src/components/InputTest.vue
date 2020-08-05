<template>
  <b-container>
    <append-input label='test' type='number' prepend-variant='primary' append-variant='primary' v-model='num'
           @prependClick='num--' @appendClick='num++'>
    </append-input>
  </b-container>
</template>

<script>
import AppendInput from './AppendInput'

export default {
  name: "InputTest",
  components: {
    AppendInput,
  },
  data: function() {
    return {
      num: 0,
    }
  },
  watch: {
    num: function(newVal, oldVal) {
      if (Number(newVal) < 0) {
        this.num = 0
      }
      if (Number(newVal) >= 30) {
        this.num = 30
      }
    }
  }
}
</script>

<style>

</style>
