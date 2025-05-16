
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Page Not Found</h2>
      <p className="not-found-text">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        <span className="arrow-left">←</span> Go back home
      </Link>
    </div>
  );
}

export default NotFound;