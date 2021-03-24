<template>
  <div class="container-fluid text-center">
    <h1 class="bg-primary text-dark p-3">Ninja Reaction Timer</h1>
    <button class="btn btn-outline-primary w-50 mt-4" @click="start" :disabled="isPlaying">Start</button>
    <block v-if="isPlaying" :delay="delay" @end="endGame"/>
    <h3 class="text-left bg-primary my-3 p-3 text-white">Vas Konacan Rezultat Je:{{ score }}</h3>
  </div>
</template>

<script>
import block from './components/block'

export default {
  name: 'App',
  components: { block },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true 
      console.log(this.delay)
    },
    endGame(e) {
      this.score = e,
      this.isPlaying = false
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #444;
  margin-top: 60px;
}
</style>
