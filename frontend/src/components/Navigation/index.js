import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        <NavLink className="p-2 text-muted" to="/about">About CFR</NavLink>
        <NavLink className="p-2 text-muted" to="/projects">Project List </NavLink>
        <NavLink className="p-2 text-muted" to="/news">Covid News</NavLink>
        <NavLink className="p-2 text-muted" to="/research">Research Papers</NavLink>
        <NavLink className="p-2 text-muted" to="/funding">Funding News</NavLink>
        <NavLink className="p-2 text-muted" to="/more-info">Get Informed</NavLink>
      </nav>
    </div>

  )
}

export default Navigation;