import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Sobre Mí</h1>
        <p>
          Soy Abril, entrenadora personal apasionada por el fitness. Mi objetivo es ayudar
          a transformar tu vida con programas efectivos, ciencia aplicada y acompañamiento real.
        </p>

        <h2 style={{ marginTop: '2rem', color: 'var(--color-primary)' }}>Mis Redes</h2>
        <ul>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
        </ul>
      </section>
    </Layout>
  );
}
