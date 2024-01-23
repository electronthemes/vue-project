<template>
  <main>
    <SignUpWithKeyUp />
  </main>
</template>
<script>
  import SignUpFroms from '@/components/SignUpFroms.vue';
  import SignUpWithKeyUp from '@/components/SignUpWithKeyUp.vue';
  export default {
    components: {
      SignUpFroms,
      SignUpWithKeyUp
    },
  }
</script>