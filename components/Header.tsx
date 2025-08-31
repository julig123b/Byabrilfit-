import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  // shrink on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    controls.start({
      height: scrolled ? 'var(--header-height-scrolled)' : 'var(--header-height)',
    });
  }, [scrolled, controls]);

  return (
    <motion.header
      animate={controls}
      initial={{ height: 'var(--header-height)' }}
      transition={{ type: 'spring', stiffness: 90, damping: 20 }}
      className="glass-header"
      role="banner"
    >
      <div className="inner">
        {/* Brand */}
        <Link href="/" className="brand" aria-label="Volver al inicio">
          ByAbrilFit
        </Link>

        {/* Nav */}
        <nav aria-label="Principal">
          <ul className="nav">
            {navLinks.map(({ href, label }) => {
              const active = router.pathname === href;
              return (
                <li key={href} className="nav-item">
                  <Link
                    href={href}
                    className={`nav-link ${active ? 'active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span className="label">{label}</span>
                    <span className="underline" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .glass-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.5);
          /* el blur real lo habilitamos si el navegador lo soporta */
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .inner {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
        }

        .brand {
          font-family: var(--font-bebas, 'Playfair Display', serif);
          letter-spacing: 2px;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--color-primary, #EBCB73);
          line-height: 1;
          display: inline-block;
          transform: translateZ(0);
        }

        .nav {
          display: flex;
          gap: 1.6rem;
          align-items: center;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding-bottom: 0.35rem;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #f3f3f3;
          opacity: 0.9;
          transition: opacity 0.2s ease, color 0.2s ease;
        }

        .nav-link:hover {
          opacity: 1;
          color: #fff;
        }

        .nav-link .underline {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0%;
          background: var(--color-primary, #EBCB73);
          transition: width 0.25s ease;
          border-radius: 3px;
        }

        .nav-link:hover .underline {
          width: 100%;
        }

        .nav-link.active {
          color: #fff;
        }

        .nav-link.active .underline {
          width: 100%;
        }

        /* Responsivo básico */
        @media (max-width: 768px) {
          .inner {
            padding: 0 1rem;
          }
          .nav {
            gap: 1rem;
          }
          .brand {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </motion.header>
  );
}
