

<template>
  <main>
    <h2 class="text-4xl font-medium pt-7 text-black text-center">Home Page</h2>

    <div class="flex items-center justify-center gap-3 mt-20">
      <button @click="redirect" class="py-2 text-base leading-[1.2] px-5 bg-black text-white font-semibold rounded-md block">Redirect</button>
      <button @click="goBack" class="py-2 text-base leading-[1.2] px-5 bg-black text-white font-semibold rounded-md block">Go Back</button>
      <button @click="goForward" class="py-2 text-base leading-[1.2] px-5 bg-black text-white font-semibold rounded-md block">Go Forward</button>
    </div>
  </main>
</template>
<script>
  export default {
    methods: {
      redirect() {
        this.$router.push({ name: 'about' })
      },
      goBack() {
        this.$router.go(-1)
      },
      goForward() {
        this.$router.go(1)
      }
    }
  }
</script>