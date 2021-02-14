import { useEffect } from "react";
import { useRouter } from "next/router";

import { newFolder } from "../../drivers/backend.driver";

const HomeContent = () => {
  const router = useRouter();
  const { folder } = router.query;

  useEffect(() => {
    (async () => {
      try {
        folder &&
          (await newFolder({
            body: { title: folder }
          }));
      } catch (error) {
        console.warn("Error creating new folder: ", error);
      }
    })();
  }, []);

  return <div>{folder}</div>;
};

export default HomeContent;
