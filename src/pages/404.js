import { useRouter } from "next/router";
import { useStoreActions } from "easy-peasy";

import Header from "../components/Header/Header";

const NotFound = () => {
  const router = useRouter();
  const { createNewBookmark } = useStoreActions(actions => actions);

  if (/new/.test(router.asPath)) {
    const path = router.asPath.split("new/")[1];

    const title = path.split("#naslov=")[1];

    const url = title ? path.split("#naslov=")[0] : path;

    const body = { url };
    try {
      if (title) body.title = decodeURIComponent(title).trim();
    } catch (error) {
      console.warn("Error parsing bookmark title: ", error.message);
      console.log("Bookmark title parsing skipped.\nBookmark title: ", title);
      if (title) body.title = title;
    }

    url && createNewBookmark(body);
    router.replace("/#/");
  } else {
    return (
      <Header>
        <title>Not Found</title>
      </Header>
    );
  }

  return (
    <Header>
      <title>Something weird happened.</title>
    </Header>
  );
};

// Flag for rendering the page with or without global Layout. Used for not rendering Layout on Login
NotFound.withLayout = true;

export default NotFound;
