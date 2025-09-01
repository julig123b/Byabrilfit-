import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

type Item = { title:string; text:string; };
export default function PinnedStack({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!ref.current) return;
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLElement>('.pin-item');
      blocks.forEach((el, i) => {
        gsap.fromTo(el, { opacity:0, y:40 }, {
          opacity:1, y:0,
          scrollTrigger: {
            trigger: ref.current,
            start: `top+=${i*120} center`,
            end: `+=150`,
            scrub: true
          }
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section">
      <div ref={ref} className="container">
        {items.map((it, i) => (
          <div key={i} className="pin-item" style={{ marginBottom:'4rem' }}>
            <h3 style={{ fontFamily:'var(--font-bebas)', letterSpacing:'2px', color:'var(--color-primary)', fontSize:'clamp(22px, 3vw, 36px)' }}>{it.title}</h3>
            <p style={{ color:'var(--color-muted)', maxWidth:720 }}>{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
