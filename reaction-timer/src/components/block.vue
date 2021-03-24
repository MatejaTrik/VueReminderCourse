<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        <p class="bg-white text-primary" >Click Me</p>
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            ractionTime: 0
        }
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.ractionTime += 10
            }, 10);
        },
        stopTimer() {
            clearInterval(this.timer)
            console.log(this.ractionTime)
            this.$emit('end', this.ractionTime)
        }
    },
    mounted() {
        console.log(" COMPONTENTS MOUTNED ")
        setTimeout(() => {
            this.showBlock = true
            this.startTimer()
            console.log(this.delay)
        }, this.delay)
    },
    updated() {
        console.log(" COMPONTENTS UPDATED ")
        
    },
    unmounted() {
        console.log(" COMPONENTS UNMOUNTED  ")
    },
}
</script>

<style>

    .block{
        width: 400px;
        border-radius: 20px;
        background: #0d6efd;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }

</style>