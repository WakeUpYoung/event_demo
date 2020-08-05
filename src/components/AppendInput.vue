<!-- Events: prependClick   appendClick -->
<!-- Slot: prepend  append -->
<template>
    <td :class="'col-md-' + (3 * colspan)">
        <b-input-group>
            <b-input-group-prepend v-if="!appendOnly">
                <slot name="prepend">
                    <b-button :variant="prependVariant" @click="emitSmthing('prependClick')" :disabled="disabled">
                        <b-icon icon="dash"></b-icon>
                    </b-button>
                </slot>
            </b-input-group-prepend>
            <b-form-input :type="type" no-wheel
                          ref="input"
                          :placeholder="value ? '' : label"
                          :value="value"
                          @update="update"
                          :disabled="disabled" ></b-form-input>

            <label class="position-absolute m-0 label-inside text-secondary font-weight-bolder" :style="{left: appendOnly ? '10px' : '60px'}">
                {{ value !== '' ? label : '' }}
            </label>
            <b-input-group-append v-if="!prependOnly">
                <slot name="append">
                    <b-button :variant="appendVariant" @click="emitSmthing('appendClick')" :disabled="disabled">
                        <b-icon icon="plus"></b-icon>
                    </b-button>
                </slot>
            </b-input-group-append>
        </b-input-group>
    </td>
</template>

<script>
    export default {
        name: "AppendInput",
        props: {
            colspan: { type: String, default: '1' },
            type: { type: String, default: 'text' },
            label: { type: String, required: true },
            value: { type: [String, Number] },
            disabled: { type: Boolean, default: false },
            prependOnly: {type: Boolean, default: false},
            appendOnly: {type: Boolean, default: false},
            prependVariant: {type: String, default: 'light'},
            appendVariant: {type: String, default: 'light'}
        },
        data: function() {
          return {
            inputValue: this.value
          }
        },
        computed: {
          valueModel: {
            get: function() {
              return this.value
            },
            set: function(newVal) {
              console.log('child newVal', newVal)
              this.value = newVal
            }
          }
        },
        methods: {
            update() {
                let v = this.$refs.input.localValue;
                if (this.type === 'number') {
                    v = Number(this.$refs.input.localValue)
                }
                console.log(v)
                this.$emit('input', v)
            },

            emitSmthing(name) {
                this.$emit(name)
            }
        }
    }
</script>

<style scoped>
.label-inside {
  top: 0;
  z-index: 10;
}
input[disabled] {
  padding-top: 20px;
}
input {
  padding-top: 20px;
}
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}
</style>
