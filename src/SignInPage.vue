<template>
  <div class="signup">
    <h2>Sign Up</h2>
    <form>
      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Password"/>
      <button type="submit">Sign Up</button>
      <p>
        Already have an account?
      </p>
    </form>
  </div>
</template>


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
