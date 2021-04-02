import { ref } from "@vue/reactivity"

const error = ref(null)


const signup = async (email, password, displayName) => {
    error.value = null
}

const useSignup = () => {

    return { error, signup }

}

export default useSignup