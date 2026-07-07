<template>
  <div class="signup">
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
      <p>
        Already have an account?
        <router-link to="/">Login</router-link>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter()

function handleSignin() {
  // const users = JSON.parse(localStorage.getItem("users")) || [];
  const raw = localStorage.getItem("users");
  console.log("raw =", raw);

  const users = JSON.parse(raw) || [];

  console.log(users);

  const exist = users.find(user => user.email === email.value);

  if (exist) {
    alert("User already exist!")
    return
  }

  users.push({ email: email.value, password: password.value })
  localStorage.setItem("users", JSON.stringify(users))

  alert("Signin successfully!")

  router.push("/dashboard")
}
</script>


<style scoped>
.signup {
  max-width: 400px;
  margin: 100px auto;
  padding: 2rem;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.signup h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.signup input {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.signup button {
  width: 100%;
  padding: 0.8rem;
  background-color: #16a34a;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.signup button:hover {
  background-color: #15803d;
}

.signup p {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
}

.signup a {
  color: #16a34a;
  text-decoration: none;
}
</style>
