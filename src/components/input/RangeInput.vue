<template>
  <div class="input-group">
    <label class="label" for="labelId">{{ config.label }}</label>
    <input
      class="input"
      type="range"
      :id="labelId"
      :min="config.min"
      :max="config.max"
      step="1"
      v-model="valor"
    />
    <input class="readout" type="number" v-model="valor" />
  </div>
</template>

<script>
export default {
  name: 'RangeInput',
  props: {
    config: Object
  },
  data() {
    return {
      valor: 2
    };
  },
  computed: {
    labelId() {
      const splitResult = this.config.label.split(' ');
      const first = splitResult.splice(0, 1)[0].toLowerCase();
      const tail = splitResult.reduce(
        (out, currVal) => (out += currVal[0].toUpperCase() + currVal.substring(1)),
        ''
      );
      return first + tail;
    }
  }
};
</script>

<style>
.input-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem;
}

.label {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text--main-color);
  width: 18%;
  text-align: right;
  font-size: 1.5rem;
}

.input {
  flex-grow: 1;
  cursor: pointer;
  margin: 0.5rem;
}

.readout {
  width: 10%;
  padding: 0.25rem;

  outline: none;
  appearance: textfield;
  color: var(--text--main-color);
  background-color: var(--bg-color);
  border: none;
  border-bottom: 5px var(--text--main-color) solid;

  font-size: 2rem;
  text-align: center;
}

.readout:focus {
  border-color: var(--input--active-color);
}
</style>
