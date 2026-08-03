import { useState } from "react";

const LoginForm = () => {
  const [remember, setRemember] = useState(false);

  return (
    <div>
      <h1>Login Page</h1>

      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        placeholder="Enter username"
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter password"
      />

      <button>Login</button>

      <button aria-label="Close Modal">
        X
      </button>

      <input
        id="remember"
        type="checkbox"
        checked={remember}
        onChange={() => setRemember(!remember)}
      />

      <label htmlFor="remember">
        Remember Me
      </label>

      <img
        src="/logo.png"
        alt="Company Logo"
      />

      <a href="/register">
        Create Account
      </a>

      <div
        data-testid="container"
      >
        Welcome User
      </div>

      <p title="error-message">
        Invalid Credentials
      </p>
    </div>
  );
}

export default LoginForm;