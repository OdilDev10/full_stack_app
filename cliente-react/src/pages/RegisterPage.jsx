import React, { useState } from "react";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
    setMessage("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setMessage("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setMessage("");
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setMessage("");
  };

  const register = async (e) => {
    e.preventDefault();
    console.log(username, email, confirmPassword, password);
    if (
      username == "" ||
      email == "" ||
      password == "" ||
      confirmPassword == ""
    ) {
      return setMessage("Faltan campos");
    }

    try {
      const body = { username, email, password, confirmPassword };
      const response = await fetch("http://127.0.0.1:3000/api/auth/register", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setMessage(data.Message || "");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={register} class="m-auto ">
        {message && (
          <div className="alert alert-warning" role="alert">
            <p>{message}</p>
          </div>
        )}

        <h1>Register</h1>
        <div class="form-group">
          <label for="username" class="form-label">
            Username
          </label>
          <br />
          <input
            type="text"
            class="form-control"
            onChange={handleUsername}
            value={username}
          />
        </div>
        <div class="form-group">
          <label for="email" class="form-label">
            Email
          </label>
          <br />
          <input
            type="email"
            class="form-control"
            onChange={handleEmail}
            value={email}
          />
        </div>

        <div class="form-group">
          <label for="password" class="form-label">
            Password
          </label>
          <br />
          <input
            type="password"
            class="form-control"
            onChange={handlePassword}
            value={password}
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword" class="form-label">
            Confirm Password
          </label>
          <br />
          <input
            type="password"
            class="form-control"
            onChange={handleConfirmPassword}
            value={confirmPassword}
          />
        </div>
        <button type="submit" class="btn btn-success w-50 mt-2 mx-auto">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
