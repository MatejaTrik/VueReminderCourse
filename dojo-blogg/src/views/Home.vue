<template>
  <div class="home">
  <h1>home</h1>
  <p ref="p">My name is {{ name }}</p>
  <p>My age is {{ age }}</p>

  <div class="container">
    <button class="btn btn-warning" @click="clickMe">Click Me</button>
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup(){
    console.log('SETUP')

    const p = ref(null)
     

    let name = 'Mario'
    let age = 30

    const clickMe = function() {
      name = "Luigii"
    }

    return {name,age, clickMe,p}

  },
  
}
</script>
