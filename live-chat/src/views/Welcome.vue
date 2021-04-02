<template>
  <div class="welcome container">
      <p>Welcome</p>
      <div v-if="showLogin">
        <h1>Log In</h1>
        <LoginForm />
        <p class="h5 text-muted">No Account Yet?  <span class="btn-md btn-outline-dark" @click="showLogin = false">Signup</span> Instead</p>

      </div> <div v-else>
          <h2>Sign Up</h2>
        <SignupForm />
        <p class="h5 text-muted">Alyready Registred?  <span class="btn-md btn-outline-dark" @click="showLogin = true">Login</span> Instead</p>
      </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import { ref } from 'vue'

export default {
    components:{ SignupForm, LoginForm },
    setup() {
        const showLogin = ref(true)

        return { showLogin }
    }
}
</script>

<style>

    .welcome{ 
        text-align: center;
        padding: 20px 0;
    }

     /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }

  .welcome span {
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
}

    .welcome button {
        margin: 20px auto;
    }


</style>