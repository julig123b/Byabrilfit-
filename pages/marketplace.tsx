import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

type Product = {
  slug: string;
  title: string;
  description: string;
  price: string;
  img: string;
};

const products: Product[] = [
  {
    slug: 'modo-oso-20',
    title: 'Modo Oso 2.0',
    description: 'Programa de ganancia de masa y fuerza, con progresión y control.',
    price: '$49.99',
    img: 'https://images.unsplash.com/photo-1526403420519-f85f8db420f4?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'anabolico',
    title: 'Recetario Anabólico',
    description: '50+ recetas altas en proteína, simples y ricas.',
    price: '$29.99',
    img: 'https://images.unsplash.com/photo-1514519106315-38eaa042cfd9?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'powerbuilding',
    title: 'Powerbuilding',
    description: 'Equilibrio entre fuerza y estética para resultados visibles.',
    price: '$59.99',
    img: 'https://images.unsplash.com/photo-1519866841-0e3d0390b1ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'servicios-1v1',
    title: 'Servicios 1 a 1',
    description: 'Coaching personalizado con seguimiento semanal.',
    price: '$99.99',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
  },
];

export default function Marketplace() {
  return (
    <Layout>
      <section className="market section">
        <div className="container">
          <header className="head">
            <h1 className="title">Tienda</h1>
            <p className="subtitle">
              Planes y productos curados para llevar tu físico a otro nivel. Elegí el tuyo.
            </p>
          </header>

          <div className="grid">
            {products.map((p) => (
              <article key={p.slug} className="card">
                <div className="media">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority={false}
                  />
                  <Link
                    href={`/info/${p.slug}`}
                    aria-label={`Más información sobre ${p.title}`}
                    className="info"
                  >
                    i
                  </Link>
                </div>

                <div className="body">
                  <h3 className="cardTitle">{p.title}</h3>
                  <p className="desc">{p.description}</p>

                  <div className="ctaRow">
                    <span className="price">{p.price}</span>
                    <Link href={`/info/${p.slug}`} className="button">
                      Ver más
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .head {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .title {
          font-family: var(--font-bebas);
          letter-spacing: 2px;
          font-size: clamp(28px, 5vw, 56px);
          color: var(--color-primary);
          margin: 0 0 0.25rem 0;
        }
        .subtitle {
          margin: 0;
          color: var(--color-muted);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.25rem;
        }
        /* 1 col en mobile, 2 en tablet, 3 en desktop */
        .card {
          grid-column: span 12;
          background: var(--color-card);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
          transform: translateZ(0);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        @media (min-width: 640px) {
          .card {
            grid-column: span 6;
          }
        }
        @media (min-width: 1024px) {
          .card {
            grid-column: span 4;
          }
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 64px rgba(0, 0, 0, 0.45);
        }

        .media {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .media :global(img) {
          transform: scale(1);
          transition: transform 0.35s ease;
        }
        .card:hover .media :global(img) {
          transform: scale(1.06);
        }

        .info {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.55);
          color: #fff;
          font-weight: 800;
          line-height: 1;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .info:hover {
          transform: translateY(-1px);
          background: rgba(0, 0, 0, 0.7);
        }

        .body {
          padding: 1rem 1rem 1.25rem;
        }
        .cardTitle {
          margin: 0 0 0.35rem 0;
          color: #fff;
          font-size: 1.15rem;
          letter-spacing: 0.02em;
        }
        .desc {
          margin: 0 0 0.9rem 0;
          color: var(--color-muted);
        }
        .ctaRow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .price {
          color: #fff;
          font-weight: 800;
          letter-spacing: 0.02em;
        }

        /* Botón usa tu clase global .button (definida en globals.css).
           Si aún no la agregaste, el link igual se verá correcto. */
      `}</style>
    </Layout>
  );
}
