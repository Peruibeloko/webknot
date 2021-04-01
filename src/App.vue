<template>
  <main class="main">
    <control-panel class="cpanel" />
    <display class="display" />
  </main>
</template>

<script>
import Display from '@/components/Display.vue';
import ControlPanel from '@/components/ControlPanel.vue';

export default {
  name: 'App',
  components: {
    Display,
    ControlPanel
  }
};
</script>

<style>
:root {
  --bg-color: rgb(34, 34, 34);
  --text--main-color: rgb(219, 219, 219);
  --input--active-color: rgb(241, 137, 76);
  box-sizing: border-box;
  font-weight: bold;
}

#app {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}

.main {
  display: flex;
  flex-direction: row;

  background-color: var(--bg-color);
  min-height: 100vh;
}

.cpanel {
  display: flex;
  padding: 1rem 1rem;

  border-right: 5px gray solid;
}

.display {
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
