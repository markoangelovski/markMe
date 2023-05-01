import NProgress from "nprogress";

import "nprogress/nprogress.css";
import "../styles/tailwind.css";

import Layout from "../components/Layout/Layout";

NProgress.configure({ showSpinner: false });

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
