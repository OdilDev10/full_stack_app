import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate()

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setMessage("");
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setMessage("");
  }

  const login = async (e) => {
    e.preventDefault();
    console.log(email, password);
    if (email == "" || password == "") {
      return setMessage("Faltan Campos");
    }
    try {
      const body = { email: email, password, password };
      const peticion = await fetch("http://127.0.0.1:3000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await peticion.json();
      console.log(data);

      if (peticion.ok) {
        sessionStorage.setItem('token', data.Token);
        navigate('/dashboard'); // Redirigir al usuario a la página de dashboard
      } else {
        setMessage(data.Message || "");
      }

    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div class="my-4 container">
      <form onSubmit={login}>
        <h1>LOGIN</h1>

        {message && (
          <div className="alert alert-warning" role="alert">
            <p>{message}</p>
          </div>
        )}

        <div class="form-group">
          <label for="email" class="form-label">
            Email
          </label>
          <br />
          <input
            type="email"
            class="form-control"
            onChange={handleEmailChange}
            value={email}
            name="email"
          />
        </div>
        <div class="form-group">
          <label for="password" class="form-label">
            Password
          </label>
          <br />
          <input
            type="password"
            onChange={handlePasswordChange}
            value={password}
            class="form-control"
            name="password"
          />
        </div>
        <div className="form-group">
          <button type="submit" class="btn btn-success w-50 mt-2">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
