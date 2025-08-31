import Layout from '../components/Layout';
import Link from 'next/link';

const products = [
  { slug: 'modo-oso-20', title: 'Modo Oso 2.0', price: '$19.99' },
  { slug: 'anabolico', title: 'Recetario Anabólico', price: '$14.99' },
  { slug: 'powerbuilding', title: 'Powerbuilding', price: '$24.99' },
];

export default function Marketplace() {
  return (
    <Layout>
      <section style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ color: 'var(--color-primary)', textAlign: 'center' }}>Tienda</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '2rem' }}>
          {products.map((p) => (
            <div key={p.slug} style={{ background: '#111', padding: '1.5rem', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--color-primary)' }}>{p.title}</h3>
              <p>{p.price}</p>
              <Link href={`/info/${p.slug}`}><a>Ver más →</a></Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
