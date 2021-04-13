<template>
    <form @submit.prevent="handleSubmit">
        <h4>Create New Playlist</h4>
        <input type="text" required placeholder="Playlist title..." v-model="title">
        <textarea placeholder="Playlist desc..." required v-model="description"></textarea>
        <!-- UPLOAD PLAYLIST IMAGE -->
        <label>Upload Playlist Cover Image</label>
        <input type="file" @change="handleChange">
        <button>Create</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useStorage from '@/composables/useStorage'

export default {
    setup() {
        const { filepath, url, uploadImage } = useStorage()

        const title = ref('')
        const description = ref('')
        const file = ref(null)
        const fileError = ref(null)

        const handleSubmit = async () => {
            if (file.value) {
                await uploadImage(file.value)
                console.log('Image uploaded, url:', url.value)
                
            }
        }

        // allowed types of photo
        const types = [ 'image/png', 'image/jpeg' ]

        const handleChange = (e) => {
            const selected = e.target.files[0]
            console.log(selected)
            if (selected && types.includes(selected.type)) {
                file.value = selected
                fileError.value = null
            } else {
                file.value = null
                fileError.value = 'Please select ian image file. ( png or jpeg )'
            }
        }

        return { title, description, handleSubmit, handleChange, fileError }
}

}
</script>

<style>
  form {
    background: white;
  }
  input[type="file"] {
    border: 0;
    padding: 0;
  }
  label {
    font-size: 12px;
    display: block;
    margin-top: 30px;
  }
  button {
    margin-top: 20px;
  }
</style>