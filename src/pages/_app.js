import "../styles/tailwind.css";

import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  if (Component.withLayout) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  } else {
    return <Component {...pageProps} />;
  }
}

export default MyApp;
