import React from 'react';
import "./Navbar.css" 

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand brand-name fs-1" href="/">Safar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active fs-5 me-2" aria-current="page" href="/">Home</a>
            <a className="nav-link fs-5 me-2" href="#">About</a>
            <a className="nav-link fs-5 me-2" href="#">Bookings</a>
            <a className="nav-link fs-5 me-4" href="#footer">Contact</a>
            
          </div>
          <button className="btn  me-2 nav-button" type="button">User</button>
          <a href="/admin/dashboard">
          <button className="btn  me-2 nav-button" type="button">Admin</button>
          </a>
            
        </div>
      </div>
    </nav>
  );
}
