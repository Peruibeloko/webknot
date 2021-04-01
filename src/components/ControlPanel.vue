<template>
  <section class="input-list">
    <RangeInput :config="colInputConfig"/>
    <RangeInput :config="rowInputConfig"/>
  </section>
</template>

<script>
import RangeInput from '@/components/input/RangeInput.vue';

export default {
  name: 'ControlPanel',
  components: {
    RangeInput
  },
  data() {
    return {
      colInputConfig: {
        label: 'Colunas',
        min: 2,
        max: 10
      },
      rowInputConfig: {
        label: 'Linhas',
        min: 2,
        max: 10
      },
    }
  }
};
</script>

<style>
.input-list {
  display: flex;
  flex-direction: column;
}
</style>
