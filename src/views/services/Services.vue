<template>
    <h3 class="text-4xl font-medium text-center">Services</h3>
    <div v-if="jobs.products">
        <ul class="flex items-center justify-center gap-5 my-8">
            <router-link @click="HandelFilter" to="#all" class="block text-base leading-none py-2 px-5 rounded-md shadow-sm border border-black border-opacity-15 text-black">All Category</router-link>
            <router-link @click="HandelFilter" :to="`/#${category}`" v-for="category in categorys" :key="category" class="block text-base leading-none py-2 px-5 rounded-md shadow-sm border border-black border-opacity-15 text-black">{{ category }}</router-link>
        </ul>
    </div>
    <div v-if="jobs.products" class="max-w-[1470px] mx-auto px-5">
        <div  class="max-w-[1370px] mx-auto mb-[100px]">
            <div v-if="filterData">
                <div class="grid grid-cols-3 gap-8">
                    <router-link 
                        v-for="job in filterJobs" :key="job.id" 
                        class="py-3 px-5 rounded-[10px] border-black border-opacity-15 border block single-card" 
                        :to="{name:'service-details', params:{id:job.id}}"
                        :data-filter="job.category"
                    >
                        <ProductCard 
                            :title="job.title" 
                            :id="job.id"
                            :category="job.category"
                            :price="job.price"
                            :description="job.description"
                            :thumbnail="job.thumbnail"
                        />
                    </router-link>
                </div>
            </div>
            <div v-if="jobsData">
                <div class="grid grid-cols-3 gap-8">
                    <router-link 
                        v-for="job in jobs.products" :key="job.id" 
                        class="py-3 px-5 rounded-[10px] border-black border-opacity-15 border block single-card" 
                        :to="{name:'service-details', params:{id:job.id}}"
                        :data-filter="job.category"
                    >
                        <ProductCard 
                            :title="job.title" 
                            :id="job.id"
                            :category="job.category"
                            :price="job.price"
                            :description="job.description"
                            :thumbnail="job.thumbnail"
                        />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="text-2xl font-medium text-center">Loading...</div>

</template>

<script>
import ProductCard from '../../components/ProductCard.vue'
export default {
    components: {
        ProductCard
    },
    data() {
        return {
            jobs: [],
            filterJobs: [],
            categorys: [],
            jobsData:true,
            filterData: false
        }
    },
    mounted() {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => this.jobs = data)
        .catch(err => console.log(err))
    },
   
    updated() {
        this.maping()
    },
    methods: {
        maping() {
            this.jobs.products.map(element => {
                if(!this.categorys.includes(element.category)){
                    this.categorys.push(element.category)
                }
                
            });
        },

        HandelFilter(e) {
            
            this.filterJobs = [];
            const filter = e.target.href.split('#')[1]
            this.jobs.products.map(element => {
                if(element.category === filter){
                   this.filterJobs.push(element);
                }else if(filter === 'all') {
                     this.filterJobs = this.jobs.products
                }

            })
            this.jobsData = false;
            this.filterData = true;
        }
    }
}
</script>

<style scoped>
</style>