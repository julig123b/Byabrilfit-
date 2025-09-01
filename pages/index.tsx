import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import PinnedStack from '../components/PinnedStack'; // 👈 importamos el componente
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleWrapRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      // Título que se encoge
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

      // Parallax del fondo
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

      // Subtítulo fade in + pin corto
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
        {/* Fondo */}
        <div ref={bgRef} style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1526406915893-7bcd65f60845?auto=format&fit=crop&w=2100&q=80"
            alt="Hero background"
            fill
            priority
            style={{ objectFit: 'cover', filter: 'brightness(0.42)' }}
          />
        </div>

        {/* Contenido */}
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1
            ref={titleRef}
            style={{
              fontFa
