<template>
  <header class="bg-light">
      <h1>THe Dojo Blog</h1>
      <hr>
      <nav class="pb-4 mb-3 h2">
          <router-link class="float-left" :to="{ name: 'Home' }">Home</router-link> |||
          <router-link :to="{ name: 'Create' }">Create</router-link>
      </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>


</style>