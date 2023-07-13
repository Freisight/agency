import '@/styles/globals.css';

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// Вот такая обёртка если мы подключаем отдельный шаблон для какой-то из страниц.
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
