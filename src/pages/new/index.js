import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStoreActions } from "easy-peasy";

import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.js";

const NewBookmark = () => {
  const router = useRouter();
  const { createNewBookmark } = useStoreActions(actions => actions);

  const body = { url: router.query.url };
  if (router.query.title) body.title = router.query.title;

  useEffect(() => {
    body.url && createNewBookmark(body);
    router.replace("/#/");
  }, []);

  return <LoadingScreen />;
};

// Flag for rendering the page with or without global Layout. Used for not rendering Layout on Login
NewBookmark.withLayout = true;

export default NewBookmark;
