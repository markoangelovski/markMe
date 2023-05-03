import { useRouter } from "next/router";
import { useEffect } from "react";
import { bookmarkStats } from "../../drivers/backend.driver";

const Stats = () => {
  const router = useRouter();

  useEffect(() => {
    if (router && router.query.url) {
      bookmarkStats({ query: router.query })
        .then((_) => {
          window.location.href = router.query.url;
        })
        .catch((err) => {
          console.warn("An error ocurred while setting stats: ", err);
        });
    }
  }, [router]);

  return <div>Redirecting...</div>;
};

export default Stats;
