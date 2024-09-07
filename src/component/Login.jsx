import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Ensure this CSS file is imported

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // State for name
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation to check if all fields are filled
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    // Clear any previous errors
    setError("");

    // Save user data to local storage
    localStorage.setItem("user", JSON.stringify({ email, password, name }));

    // Redirect to home page
    navigate("/Home");
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      background: 'linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)' 
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        padding: '2rem', 
        background: 'white', 
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
        maxWidth: '400px', 
        width: '100%' 
      }}>
        <div style={{ marginBottom: '1rem' }}>
          <TextField
            fullWidth
            label="Name"
            id="Name"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            InputLabelProps={{
              style: { color: 'black', fontSize: '0.875rem' }
            }}
            inputProps={{
              style: { padding: '10px' }
            }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <TextField
            fullWidth
            label="Email"
            id="Email"
            size="small"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            InputLabelProps={{
              style: { color: 'black', fontSize: '0.875rem' }
            }}
            inputProps={{
              style: { padding: '10px' }
            }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <TextField
            fullWidth
            label="Password"
            id="Password"
            size="small"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputLabelProps={{
              style: { color: 'black', fontSize: '0.875rem' }
            }}
            inputProps={{
              style: { padding: '10px' }
            }}
          />
        </div>
        {error && (
          <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
            {error}
          </div>
        )}
        <div style={{ marginBottom: '1rem' }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={handleLogin}
            style={{ padding: '0.75rem' }}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
