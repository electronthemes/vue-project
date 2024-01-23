<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  
</script>
<script>
  import Header from './components/Header.vue';
  export default {
    components: {
      Header
    }
  }
</script>

<style lang="scss" scoped>

</style>