import { ReactNode } from 'react';
import Header from './Header';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 'var(--header-height)', overflowX: 'hidden' }}>{children}</main>
      <footer
        style={{
          background: 'var(--color-card)', color: '#ccc',
          padding: '2rem', textAlign: 'center', marginTop: '4rem'
        }}
      >
        <p>&copy; {new Date().getFullYear()} ByAbrilFit. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
