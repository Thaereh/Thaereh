import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#282c34', color: '#fff', textAlign: 'center', padding: '1rem 0', marginTop: '2rem' }}>
      <small>&copy; {new Date().getFullYear()} Thaereh. All rights reserved.</small>
    </footer>
  );
}

export default Footer;
