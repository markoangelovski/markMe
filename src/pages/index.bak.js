import HomeContent from "../components/HomeContent/HomeContent.js";

const Home = () => {
  return <HomeContent />;
};

// Flag for rendering the page with or without global Layout. Used for not rendering Layout on Login
Home.withLayout = true;

export default Home;
