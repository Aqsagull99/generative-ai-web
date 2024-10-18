"use client"

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo"></div>
      <nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={isMenuOpen ? 'active' : ''}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/works">How it Works</Link></li>
          <li><Link href="/use-cases">Use Cases</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

