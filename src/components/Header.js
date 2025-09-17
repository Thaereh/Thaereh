import React from 'react';

function Header() {
  return (
    <header style={{ background: '#282c34', color: '#fff', padding: '1rem 0', textAlign: 'center' }}>
      <h1>Thaereh Portfolio</h1>
      <nav>
        <a href="#about" style={{ color: '#61dafb', margin: '0 1rem' }}>About</a>
        <a href="#projects" style={{ color: '#61dafb', margin: '0 1rem' }}>Projects</a>
        <a href="#contact" style={{ color: '#61dafb', margin: '0 1rem' }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
