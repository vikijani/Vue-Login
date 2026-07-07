<template>
  <div class="login">
    <h2>Login</h2>
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
      <p>
        Don't have an account?
      </p>
    </form>
  </div>
</template>

<style scoped>
  .login {
    max-width: 400px;
    margin: 100px auto;
    padding: 2rem;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  .login h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
  }

  .login input {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
  }

  .login button {
    width: 100%;
    padding: 0.8rem;
    background-color: #4f46e5;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .login button:hover {
    background-color: #4338ca;
  }

  .login p {
    margin-top: 1rem;
    text-align: center;
    font-size: 0.9rem;
  }

  .login a {
    color: #4f46e5;
    text-decoration: none;
  }
</style>
