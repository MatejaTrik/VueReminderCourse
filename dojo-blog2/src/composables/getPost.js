import { ref } from 'vue'

const getPost = function(id) {
    const post = ref(null)
    const error = ref(null)

    const load = async() => {
        try {
            // Simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 2000);
            })

            let data = await fetch('http://localhost:3000/posts/' + id)
            if (!data.ok) {
                throw Error('that post does not exist')
            }
            post.value = await data.json()
            console.log(post.value)
        } catch (err) {
            error.value = err
            console.log(error.value)

        }
    }

    return { post, error, load }
}

export default getPost