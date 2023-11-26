/* eslint-disable */
<template>
   
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-36 w-auto" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login In to your account</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent >
          
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
            
            <button @click="Login()"  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
          </div>
        </form>
  
      </div>
    </div>
  </template>
  <script>
  import axios from "axios"
  export default{
    name:'LoginPg',
    data(){
        return{
            email:"",
            password:""
        }
        
        
    },
    methods:{
            async Login(){
                let data1= await axios.get(`https://users-hkgi.onrender.com/user?email=${this.email}&password=${this.password} `)
                console.log(data1)
                if (data1.data.length==0){
                    alert("Incorrect Email or Password")
                }
                else{
                    localStorage.setItem("userInfo",JSON.stringify(data1.data[0]))
                this.$router.push({name:'Home'})
                }
            },
  },
  mounted(){
    let user=localStorage.getItem('userInfo');
    if(user){
      this.$router.push({name:'Home'})
    }

  }

}
</script>