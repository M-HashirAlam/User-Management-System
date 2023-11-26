<template>
    <People />
</template>
<script setup>
import { onMounted } from 'vue';
import People from "../components/PeoplePg.vue"
import router from '@/routes';
onMounted(()=>{
    let user=localStorage.getItem('userInfo');
    if(!user){
      router.push({name:'SignUp'})
    }

  })
</script>