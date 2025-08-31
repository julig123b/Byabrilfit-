import Layout from '../components/Layout';

export default function Login() {
  return (
    <Layout>
      <section style={{ padding: '6rem 2rem', maxWidth: '500px', margin: '0 auto' }}>
        <h1 style={{ color: 'var(--color-primary)', textAlign: 'center' }}>Login</h1>
        <form>
          <label>Email</label>
          <input type="email" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
          <label>Password</label>
          <input type="password" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
          <button type="submit" style={{ background: 'var(--color-primary)', padding: '0.5rem 1rem' }}>
            Entrar
          </button>
        </form>
      </section>
    </Layout>
  );
}
