import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Page not found</p>
      <p>Back to <Link to="/">Homepage</Link></p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Poppins',
  },
  title: {
    fontSize: '5rem',
    color: '#007bff',
    marginBottom: '10px',
  },
  message: {
    fontSize: '1.5rem',
    color: '#333',
  },
};

export default ErrorElement
