<template>
<div v-if="job">
    <h1>{{job.title}}</h1>
    <h3 class="bg-light mt-5">Job ID is: {{ job.id }}</h3>
    <h3 class="bg-light">With details: {{ job.details }}</h3>

</div>
</template>

<script>
export default {
    props:[ 'id', 'details' ],
    data() {
        return {
            job: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/'+ this.id)
            .then(res => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.message))
    },
}
</script>

<style>

</style>