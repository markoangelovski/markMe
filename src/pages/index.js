import { useEffect } from "react";
import { useRouter } from "next/router";

import HomeContent from "../components/HomeContent/HomeContent.js";
import FolderContent from "../components/FolderContent/FolderContent.js";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Inserts /#/ into URL if URL does not contain /#/ - user landed on homepage
    !/\/#\//.test(router.asPath) && router.push(`/#/`);
  }, []);

  const hashPath = router.asPath.split("#");

  const isHomeRoute = hashPath[0] === "/" && hashPath[1] === "/";

  if (isHomeRoute) return <HomeContent />;

  return <FolderContent />;
};

// Flag for rendering the page with or without global Layout. Used for not rendering Layout on Login
Home.withLayout = true;

export default Home;
