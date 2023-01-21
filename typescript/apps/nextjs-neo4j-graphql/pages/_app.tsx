import { AppProps } from 'next/app';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to nextjs-neo4j-graphql!</title>
      </Head>
      <main className="app">
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </main>
    </>
  );
}

export default CustomApp;
