<template>
  <div v-if="job">
      <div class="max-w-[1370px] mx-auto mb-20">
          <div>
              <h1 class="text-6xl font-medium text-center mb-12">{{ job.title }}</h1>
              <img class=" object-top max-w-[50vw] mx-auto" :src="job.thumbnail" :alt="title">
          </div>
          <div>
            <p class="text-center text-[20px] my-10">{{ job.description }}</p>
            <div class="grid grid-cols-4 gap-10" >
              <div v-for="image in job.images" :key="image">
                <img :src="image" alt="">
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['id'],
    data() {
        return {
          job: null
        }      
    },
    mounted() {
        fetch('https://dummyjson.com/products/' + this.id)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(err => console.log(err))
        
    }
}
</script>

<style>

</style>