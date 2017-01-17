<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span class="icon-check_circle"></span>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/hello.vue';

export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'App Components!'
    };
  },
  components: {
    Hello
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
