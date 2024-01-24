<template>
    <div class="relative group">
        <div class="relative h-[300px] overflow-hidden rounded-[10px] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:bg-opacity-50">
            <img class="h-full w-full object-cover" :src="thumbnail" alt="">
            <span class="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-[4px] z-[22] block font-bold text-[14px] group-hover:bg-black group-hover:text-white duration-300 ease-in-out">{{ category }}</span>
        </div>
        <div>
            <div class="mt-5">
                <h5 class="text-[16px] font-medium text-black mb-2 leading-none">Price: {{ price }}</h5>
                <h3 class="text-xl font-medium text-black">{{ title }}</h3>
            </div>
            <p class="mt-2 text-[18px] line-clamp-2">{{description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    //, id, category, price, description, thumbnail
    props:['title' , 'category' , 'price','description','thumbnail']
}
</script>

<style>

</style>