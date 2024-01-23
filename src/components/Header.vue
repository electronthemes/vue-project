<template>
    <div class="py-5 border border-b border-black border-opacity-15 mb-20">
        <div class="container max-w-[1470px] mx-auto px-5 flex items-center justify-between">
            <div class="text-3xl leading-none font-bold ">
                <router-link to="/">Vue</router-link>
            </div>
        
            <ul class="flex items-center justify-center gap-3 nav">
                <li><router-link class="block text-base leading-none py-2 px-5 rounded-md shadow-sm border border-black border-opacity-15 text-black" to="/home">Home</router-link></li>
                <li><router-link class="block text-base leading-none py-2 px-5 rounded-md shadow-sm border border-black border-opacity-15 text-black" :to="{name: 'about'}">About</router-link></li>
                <li><router-link class="block text-base leading-none py-2 px-5 rounded-md shadow-sm border border-black border-opacity-15 text-black" to="/">Services</router-link></li>
            </ul>
            <div>
                <button class="sign-up"><router-link class="py-2 text-base leading-[1.2] px-5 bg-black text-white font-semibold rounded-md block" to="/Contact"><span class="translate-y-[-2px] block">Sign up</span></router-link></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav .router-link-active.router-link-exact-active{
    @apply bg-black text-white;
}
.sign-up .router-link-active.router-link-exact-active{
    @apply bg-green-500 text-white;
}
</style>