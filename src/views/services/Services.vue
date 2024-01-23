<template>
    <ul class="max-w-[500px] mx-auto p-8 rounded-md bg-white shadow-lg flex flex-col gap-3 jobs-wrapper">
        <li v-for="job in jobs" :key="job.id" :title="job.title">
            <!-- service-deatils/pass your unique id  thats mins params:{id:job.id}}-->
            <router-link class="py-3 px-5 border-black border-opacity-15 border block text-2xl font-medium" 
                :to="{name:'service-details', params:{id:job.id}}"
            >
            {{ job.title }}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {title:'Web Developer', id:1, details:'Web developer Pages'},
                {title:'Web Designer', id:2, details:'Web Designer Pages'},
                {title:'UX Designer', id:3, details:'UX Designer Pages'}
            ]
        }
    }
}
</script>

<style scoped>
.jobs-wrapper li a:hover,.jobs-wrapper li a.router-link-active.router-link-exact-active{
    @apply  bg-green-400 text-white border-green-400 duration-200 ease-out;
}
</style>