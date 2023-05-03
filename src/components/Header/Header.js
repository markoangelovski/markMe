import Head from "next/head";

// GitHub Pages - added only for hosting on GH Pages as base path https://nextjs.org/docs/api-reference/next.config.js/basepath#images
// const { basePath } = require("../../../config");

const Header = ({ children }) => {
  return (
    <Head>
      <title>MarkMe</title>
      <link rel="icon" href={/* basePath + */ "/favicon.ico"} />
      {children}
    </Head>
  );
};

export default Header;
