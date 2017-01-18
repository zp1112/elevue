<template>
  <div class="app">
    <apphead></apphead>
    <tab></tab>
  </div>
</template>

<script>
import Apphead from './components/header/header.vue';
import Tab from './components/tab/tab.vue';

export default {
  components: {
    Apphead,
    Tab
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './commons/stylus/icon.styl'

h1 {
  color: #42b983;
}
</style>
