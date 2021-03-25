<template>
<div>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">About</router-link>
  </div>

  <button @click="redirect" class="btn btn-danger mx-5 p-1 btn-sm">Redirect</button>
  <button @click="back" class="btn btn-danger mx-5 p-1 btn-sm">Go Back</button>
  <button @click="forward" class="btn btn-danger mx-5 p-1 btn-sm">Go Forward</button>

  <router-view/>
</div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    redirect(){
      this.$router.push({ name: 'Home'})
    },
    back(){ 
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(+1)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>
