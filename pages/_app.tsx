import type { AppProps } from 'next/app';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.css';

// Importamos las fuentes con next/font
import { Inter, Bebas_Neue, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    // Inyectamos las variables de fuentes en el wrapper
    <div className={`${inter.variable} ${bebas.variable} ${playfair.variable}`} 
         style={{ fontFamily: 'var(--font-inter)' }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
