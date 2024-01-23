<template>
    <div class="max-w-[500px] mx-auto bg-white shadow-lg rounded-md border border-black border-opacity-5 py-12 px-6">
        <form v-if="!submited" @submit.prevent="handelSubmit">
            <div>
                <label class="block text-xl font-medium">Name</label>
                <input 
                    class="h-12 w-full rounded-md border border-black border-opacity-15 p-5 text-black placeholder:text-black placeholder:text-opacity-60 mt-2 foucs:outline-none focus-visible:outline-none focus-visible:border-black" type="text" 
                    placeholder="Enter Your Name" 
                    required
                    v-model="name"
                    @keyup="nameValid"
                />
                <div v-if="nameError">
                    <p class="text-red-500 mt-1">{{nameError}}</p>
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-xl font-medium">Email</label>
                <input 
                    class="h-12 w-full rounded-md border border-black border-opacity-15 p-5 text-black placeholder:text-black placeholder:text-opacity-60 mt-2 foucs:outline-none focus-visible:outline-none focus-visible:border-black" type="text" 
                    placeholder="Enter Email" 
                    required
                    v-model="email"
                    @keyup="emailValid"
                />
                <div v-if="emailError">
                    <p class="text-red-500 mt-1">{{emailError}}</p>
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-xl font-medium mt-4">Password</label>
                <input 
                    class="h-12 w-full rounded-md border border-black border-opacity-15 p-5 text-black placeholder:text-black placeholder:text-opacity-60 mt-2 foucs:outline-none focus-visible:outline-none focus-visible:border-black" type="password" 
                    placeholder="Enter Password" 
                    v-model="password"
                    @keyup="passwordValid"
                />
                <div v-if="passwordError">
                    <p class="text-red-500 mt-1">{{passwordError}}</p>
                </div>
            </div>
            <div class="mt-4">
                <label class="block text-xl font-medium mt-4 ">Role</label>
                <select v-model="role" class="mt-2 w-full border border-black border-opacity-15 p-3 h-12 text-black">
                    <option value="designer">Web Designer</option>
                    <option value="devoloper">Web Developer</option>
                    <option value="graphic">Grapics Designer</option>
                </select>
                <div v-if="roleError">
                    <p class="text-red-500 mt-1">{{roleError}}</p>
                </div>
            </div>
            <div class="flex items-center justify-start gap-2 mt-4">
                <input type="checkbox" v-model="terms" class="mt-2 w-5 h-5 border-black rounded-md inline-block" required>
                <label class="block text-base leading-none mt-2">Terms and Conditions</label>
            </div>
            <!-- //multiple check options -->
            <div>
                <h4 class="mt-4 text-xl font-medium">Your Skills</h4>
                <div class="flex flex-wrap justify-start items-center gap-4 mt-2">
                    <div class="flex items-center justify-start gap-2 ">
                        <input type="checkbox" value="HTML" v-model="selectSkill" class="mt-2 w-5 h-5 border-black rounded-md inline-block">
                        <label class="block text-base font-medium leading-none mt-2">HTML</label>
                    </div>
                    <div class="flex items-center justify-start gap-2 ">
                        <input type="checkbox" value="css" v-model="selectSkill" class="mt-2 w-5 h-5 border-black rounded-md inline-block">
                        <label class="block text-base font-medium leading-none mt-2">css</label>
                    </div>
                    <div class="flex items-center justify-start gap-2 ">
                        <input type="checkbox" value="javascript" v-model="selectSkill" class="mt-2 w-5 h-5 border-black rounded-md inline-block">
                        <label class="block text-base font-medium leading-none mt-2">Javascript</label>
                    </div>
                    <div class="flex items-center justify-start gap-2 ">
                        <input type="checkbox" value="figma" v-model="selectSkill" class="mt-2 w-5 h-5 border-black rounded-md inline-block">
                        <label class="block text-base font-medium leading-none mt-2">Figma</label>
                    </div>
                </div>
                <div v-if="tempSkillsError">
                    <p class="text-red-500 mt-1">{{tempSkillsError}}</p>
                </div>
            </div>
            <!-- add skills option -->
            <div>
                <div>
                    <label class="block text-xl font-medium mt-4">Another Skills</label>
                    <input 
                        class="h-12 w-full rounded-md border border-black border-opacity-15 p-5 text-black placeholder:text-black placeholder:text-opacity-60 mt-2 foucs:outline-none focus-visible:outline-none focus-visible:border-black" type="text" 
                        placeholder="Skills" 
                        v-model="tempSkills"
                        @keyup="addSkill"
                    />
                    <div v-if="skillsError">
                        <p class="text-red-500 mt-1">{{skillsError}}</p>
                    </div>
                </div>
                <!--Show the loop skills -->
                <div class="mt-4">
                    <div class="flex items-center gap-2 flex-wrap mt-2" >
                        <button v-for="skill in skills" :key="skill" @click="removeSkill(skill)" class="py-[6px] px-3 rounded-md bg-black text-white leading-none capitalize text-[14px]">{{ skill }}</button>
                    </div>
                </div>
            </div>
            <div class="submited mt-4 flex justify-center items-center">
                <button class="py-3 px-5 bg-black text-white font-semibold rounded-md">Create Your Account</button>
            </div>
        </form>
        <div v-if="submited" class="text-center">
            <h3 class="text-2xl font-medium text-green-500">Thank you!</h3>
            <p class="text-xl">Your message has been successfully sent.</p>
        </div>
        
    </div>
    <div v-if="submited">
    <div class="max-w-[500px] mx-auto bg-white shadow-lg rounded-md border border-black border-opacity-5 mt-20 py-12 px-6">
        <h5 class="text-2xl font-medium mb-2">User Details</h5>
        <p class="text-xl font-medium">Name: {{ name }}</p>
        <p class="text-xl font-medium">Email: {{ email }}</p>
        <p class="text-xl font-medium">Password: {{ password }}</p>
        <p class="text-xl font-medium">Role: {{ role }}</p>
        <p class="text-xl font-medium">Terms: {{ terms }}</p>
        <p class="text-xl font-medium">Skills: {{ selectSkill }}</p>
        <div>
            <p class="text-xl font-medium">Another Skills :</p>
            <div class="flex items-center gap-2 flex-wrap mt-2" >
                <button v-for="skill in skills" :key="skill" class="py-[6px] px-3 rounded-md bg-black text-white leading-none capitalize text-[14px]">{{ skill }}</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            role: '',
            terms:'',
            selectSkill:[],
            tempSkills: '',
            skills:[],
            nameError: '',
            emailError: '',
            passwordError: '',
            tempSkillsError: '',
            roleError: '',
            skillsError: '',
            submited: false
        }
    },
    methods: {
        addSkill(e){
            //this condition means if the come key press or enter key press or space key press and the tempSkills is not null then add the tempSkills in the name array 
            if(e.key === ',' || e.key === 'Enter' || e.key === ' ' && this.tempSkills){
                //this condition means if the tempSkills is alrady not add the skills array 
                if(!this.skills.includes(this.tempSkills)){
                    this.skills.push(this.tempSkills);
                }  
                this.tempSkills=null;
            }
        }, 
        removeSkill(skill){
            this.skills = this.skills.filter((item)=>{
                return skill !== item
            })
        },
        // name validation
        nameValid(e){
            this.nameError = this.name.length > 4 ? '' : 'Enter Your Full Name'
        },
        emailValid(e){
            this.emailError = this.email.includes('@') && this.email.includes('.com') ? '' : 'Email Must Be Valid'
        },
        passwordValid(e){
            this.passwordError = this.password.length > 5 ? '' : 'Password Must Be 6 Character'
        },
        handelSubmit(){
            // Role Validation is Required
            this.roleError = this.role === '' ? 'Role Must Be Selected' : ''

            // Role Validation is Required
            this.tempSkillsError = this.skills <= 0  ? 'Skills Must Be Selected' : ''

            // Skills Validation is Required
            this.skillsError = this.skills.length > 6 ? 'Skills maximum 6' : ''

            if(!this.nameError && !this.emailError && !this.passwordError && !this.roleError && !this.skillsError){
                console.log('Form Submitted');
                this.submited = true
            }
        },
        
    }
}
</script>
