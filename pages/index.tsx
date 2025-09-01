import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // refs de elementos a animar
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleWrapRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      // 1) Título que se encoge y sube
      gsap.to(titleRef.current, {
        scale: 0.58,
        y: -120,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // 2) Parallax del fondo (zoom + y)
      gsap.to(bgRef.current, {
        scale: 1.08,
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // 3) Subtítulo: fade in + pin corto (queda fijo un tramo al inicio)
      if (subtitleRef.current && subtitleWrapRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.15,
            ease: 'power1.out',
          }
        );

        ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top top+=40',
          end: 'top+=260 top',
          pin: subtitleWrapRef.current,
          pinSpacing: false,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
          display: 'grid',
          placeItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Fondo con parallax */}
        <div ref={bgRef} style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1526406915893-7bcd65f60845?auto=format&fit=crop&w=2100&q=80"
            alt="Hero background"
            fill
            priority
            style={{ objectFit: 'cover', filter: 'brightness(0.42)' }}
          />
        </div>

        {/* Contenido centrado */}
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1
            ref={titleRef}
            style={{
              fontFamily: 'var(--font-bebas)',
              letterSpacing: '6px',
              fontSize: 'clamp(42px, 10vw, 132px)',
              margin: 0,
              color: 'var(--color-primary)',
              transform: 'translateZ(0)',
              willChange: 'transform',
            }}
          >
            AESTHETIC
          </h1>

          <div ref={subtitleWrapRef} style={{ marginTop: '1rem' }}>
            <p
              ref={subtitleRef}
              style={{
                margin: 0,
                color: '#e9e9e9',
                opacity: 0.92,
                fontFamily: 'var(--font-playfair)',
              }}
            >
              Entrenamiento inteligente, estética real.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN PLACEHOLDER (para que exista scroll real).
          Luego reemplazá esto por tus secciones: comunidad, tienda, historia, etc. */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '2px', color: 'var(--color-primary)' }}>
            Planes Personalizados
          </h2>
          <p style={{ maxWidth: 720, color: 'var(--color-muted)' }}>
            Entrenamientos y nutrición aplicable, diseñados para tu objetivo y tu estilo de vida. Vamos a construir la
            versión que querés ver en el espejo, con etapas claras y seguimiento real.
          </p>
          <div
            style={{
              marginTop: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="card" style={{ padding: '1.2rem' }}>
                <h3 style={{ margin: '0 0 .5rem 0', color: '#fff' }}>Programa #{i}</h3>
                <p style={{ margin: 0, color: 'var(--color-muted)' }}>
                  Fase de progresión, técnica y métricas. Ideal para {i === 1 ? 'principiantes' : i === 2 ? 'intermedios' : 'avanzados'}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
