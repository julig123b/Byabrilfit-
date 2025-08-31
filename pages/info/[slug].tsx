import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function InfoPage() {
  const { query } = useRouter();
  const { slug } = query;

  return (
    <Layout>
      <section style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: 'var(--color-primary)' }}>Detalle: {slug}</h1>
        <p>Aquí iría la descripción completa del plan o producto seleccionado.</p>
        <h2 style={{ marginTop: '2rem' }}>¿Qué incluye?</h2>
        <ul>
          <li>Entrenamientos estructurados</li>
          <li>Consejos de nutrición</li>
          <li>Acceso a comunidad</li>
        </ul>
        <button style={{ marginTop: '2rem', background: 'var(--color-primary)', padding: '1rem 2rem' }}>
          Empezar hoy
        </button>
      </section>
    </Layout>
  );
}
