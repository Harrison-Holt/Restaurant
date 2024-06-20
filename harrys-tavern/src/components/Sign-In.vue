<template>
    <div class="signin">
      <h2>Sign In</h2>
      <form>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Sign In</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignIn'
  };
  </script>
  
  <style scoped>
  .signin {
    max-width: 400px;
    margin: 0 auto;
    padding: 1em;
  }
  </style>
  
