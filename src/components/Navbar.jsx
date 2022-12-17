import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" >THRIFT-SHOP</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" >Shop</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart"  className="nav-link" >Cart</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}


