import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Sobre Mí' },
  { href: '/marketplace', label: 'Tienda' },
  { href: '/login', label: 'Login' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ height: scrolled ? 'var(--header-height-scrolled)' : 'var(--header-height)' });
  }, [scrolled, controls]);

  return (
    <motion.header
      animate={controls}
      initial={{ height: 'var(--header-height)' }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        zIndex: 1000,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        background: 'rgba(0,0,0,0.6)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Link href="/">
        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>
          ByAbrilFit
        </span>
      </Link>
      <nav>
        <ul style={{ display: 'flex', gap: '1.5rem' }}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <span style={{ fontSize: '1rem', fontWeight: 500 }}>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
