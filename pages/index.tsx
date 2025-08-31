import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!heroRef.current || !heroTitleRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(heroTitleRef.current, {
        scale: 0.6,
        y: -150,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <section
        ref={heroRef}
        style={{
          position: 'relative', height: '100vh',
          display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1526406915893-7bcd65f60845?auto=format&fit=crop&w=2100&q=80"
          alt="Hero"
          layout="fill" objectFit="cover"
          style={{ filter: 'brightness(0.45)' }}
        />
        <h1
          ref={heroTitleRef}
          style={{
            color: 'var(--color-primary)',
            fontSize: 'clamp(2.5rem, 10vw, 8rem)',
            fontFamily: 'Playfair Display, serif',
            letterSpacing: '4px', margin: 0, zIndex: 2
          }}
        >
          AESTHETIC
        </h1>
      </section>

      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--color-primary)' }}>Planes Personalizados</h2>
        <p>Entrenamientos adaptados a tus objetivos y estilo de vida.</p>
        <Link href="/marketplace"><a style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Ir a la Tienda →</a></Link>
      </section>
    </Layout>
  );
}
