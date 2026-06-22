import { useEffect, useState } from "react";
import { IoCart } from "react-icons/io5";

function Header() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleIncrease = (event: Event) => {
      const customEvent = event as CustomEvent<{ value: number }>;

      setCount((prev) => prev + customEvent.detail.value);
    };

    window.addEventListener("increase-counter", handleIncrease);

    return () => {
      window.removeEventListener("increase-counter", handleIncrease);
    };
  }, []);

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 40px',
      backgroundColor: '#1a1d24', // Modern dark background
      color: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Smooth bottom shadow
      fontFamily: 'sans-serif'
    }}>
      {/* Brand Logo */}
      <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '1px' }}>
        My<span style={{ color: '#4facfe' }}>Logo</span>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '30px', margin: 0, padding: 0 }}>
          <li><a href="#home" style={{ color: '#a0aec0', textDecoration: 'none', fontWeight: '500' }}>Home</a></li>
          <li><a href="#about" style={{ color: '#a0aec0', textDecoration: 'none', fontWeight: '500' }}>About</a></li>
          <li><a href="#services" style={{ color: '#a0aec0', textDecoration: 'none', fontWeight: '500' }}>Services</a></li>
          <li><a href="#contact" style={{ color: '#a0aec0', textDecoration: 'none', fontWeight: '500' }}>Contact</a></li>
        </ul>
      </nav>

      {/* Shopping Cart Button */}
      <button style={{
        position: 'relative',
        background: 'none',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s'
      }}>
        <IoCart size={28} style={{ color: '#e2e8f0' }} />

        {/* Only show badge if count is greater than 0 */}
        {count > 0 && (
          <span style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            backgroundColor: '#ff4d4f', // Eye-catching notification red
            color: 'white',
            fontSize: '11px',
            fontWeight: 'bold',
            borderRadius: '50%',
            width: '18px',
            height: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 4px rgba(0,0,0,0.3)'
          }}>
            {count}
          </span>
        )}
      </button>
    </header>
  );
}

export default Header;
