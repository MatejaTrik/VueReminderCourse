<template>
<div class="container d-flex justify-content-center bg-light mt-5">
    <div class="create text-dark">
        <form @submit.prevent="handleSumbit" class="form-group">
            <label class="form-label h4">Title</label>
            <input v-model="title" class="form-control  align-" type="text" required>

            <label class="form-label h4">Content</label>
            <textarea v-model="body" class="form-control  align-" required></textarea>

            <label class="form-label h4">Tags ( hit enter to add )</label>
            <input @keydown.enter.prevent="handleKeydown" v-model="tag" class="form-control  align-" type="text">
            <div v-for="tag in tags" :key="tag">
                #{{ tag }}
            </div>

            <button class="btn btn-dark mt-3">Add Post</button>
        </form>
    </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])

        const router = useRouter()
        console.log(router)

        const handleKeydown = function() {
            if (!tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/, '')
                tags.value.push(tag.value)
            } 
            tag.value = ''
        }

        const handleSumbit = async function(){
            const post = {
                title: title.value,
                body: body.value,
                tags: tags.value,
            }

            await fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(post)
            })
            router.push({ name: 'Home' })

        }

        return {title, body, tag, handleKeydown, handleSumbit, tags}
    }
}
</script>

<style>

</style>