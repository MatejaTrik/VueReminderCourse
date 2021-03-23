<template>
<div>
  <h1 class="text-center">{{title}}</h1>

  <Modal />

  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'my first vue app :))'
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('bg-warning')
      this.$refs.name.focus()
    }
  },
}
</script>

<style>



</style>
