import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item">
            <Link to="/home" className="header__link">Home</Link>
          </li>
          <li className="header__list-item">
            <Link to="/dashboard" className="header__link">Dashboard</Link>
          </li>
          <li className="header__list-item">
            <Link to="/sobre" className="header__link">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
