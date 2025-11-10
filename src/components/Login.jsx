import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validUsername = import.meta.env.VITE_AUTH_USERNAME;
    const validPassword = import.meta.env.VITE_AUTH_PASSWORD;

    if (username === validUsername && password === validPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="login-container">
      <div className="login-background"></div>
      <div className="login-card">
        <div className="login-header">
          <img src="/assets/pulse-ops-logo.png" alt="Pulse Ops Logo" className="login-logo" />
          <h1>PULSE OPS</h1>
          <p>Workforce Management System</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="username">
              <i className="fas fa-user"></i> Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <i className="fas fa-lock"></i> Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="login-button">
            <i className="fas fa-sign-in-alt"></i> Sign In
          </button>
        </form>

        <div className="login-footer">
          <p>Default credentials: admin / pulseops2024</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
