import type { AppProps } from 'next/app';
import { UrqlProvider } from '../graphql/UrqlProvider';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UrqlProvider>
      <Component {...pageProps} />
    </UrqlProvider>
  );
}
