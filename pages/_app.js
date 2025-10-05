import { Inter, Poly } from 'next/font/google';
import '../src/index.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poly = Poly({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-poly',
});

function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${poly.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
