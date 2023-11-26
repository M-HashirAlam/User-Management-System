<template>
    <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    -->
    <div class="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-36 w-auto" src="/user-.png" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up to your account</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent >
          <div>
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">User Name</label>
            <div class="mt-2">
              <input id="username" name="username" type="text" autocomplete="" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  v-model="username"/>
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  v-model="email"/>
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900" >Password</label>
              
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="password" />
            </div>
          </div>
  
          <div>
            
            <button @click="Sign()"  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
  
        <p class="mt-10 text-center text-sm text-gray-500">
          Already have an account?
         
          <router-link to="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</router-link>
        </p>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios"
  export default{
    name:'SignUp',
    data(){
        return{
          username:"",
            email:"",
            password:""
        }
        
        
    },
    methods:{
            async Sign(){
                let data1= await axios.post("https://users-hkgi.onrender.com/user",{
                  username:this.username,
                    email:this.email,
                    password:this.password
                })
                console.log(data1)
                // alert("Welcome")
                localStorage.setItem("userInfo",JSON.stringify(data1.data))
                this.$router.push({name:'Home'})
            }
  },
  mounted(){
    let user=localStorage.getItem('userInfo');
    if(user){
      this.$router.push({name:'Home'})
    }

  }
}
</script>