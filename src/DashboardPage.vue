<template>
  <div class="dashboard" >
    <h2>Welcome</h2>
    <p>This is your dashboard.</p>
    <button>Logout</button>
  </div>
  <div>
    <p>You are not logged in.</p>
  </div>
</template>

<style scoped>
  .dashboard {
    max-width: 600px;
    margin: 100px auto;
    padding: 2rem;
    background: #f9fafb;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }

  .dashboard h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #111827;
  }

  .dashboard p {
    font-size: 1.1rem;
    color: #374151;
    margin-bottom: 2rem;
  }

  .dashboard button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    background-color: #ef4444;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .dashboard button:hover {
    background-color: #dc2626;
  }
</style>
