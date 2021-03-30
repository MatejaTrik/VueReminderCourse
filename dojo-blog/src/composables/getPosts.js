import { ref } from "vue";


const getPosts = function() {
    const posts = ref([])
    const error = ref(null)

    const load = async() => {
        try {
            // Simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 2000);
            })

            let data = await fetch('http://localhost:3000/posts')
            if (!data.ok) {
                throw Error('no available data')
            }
            posts.value = await data.json()
            console.log(posts.value)
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { posts, error, load }


}

export default getPosts