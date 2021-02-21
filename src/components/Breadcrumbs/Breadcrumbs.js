import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import useLocalStorage from "../../hooks/useLocalStorage.js";
import useBradcrumbClick from "../../hooks/useBradcrumbClick.js";

const Breadcrumbs = () => {
  const [crumbs, setCrumbs] = useState([]);
  const router = useRouter();
  const { folderId } = router.query;

  const { get, set } = useLocalStorage();
  const { id } = useBradcrumbClick();

  useEffect(() => {
    const oldCrumbs = get("crumbs");
    oldCrumbs && oldCrumbs?.length ? setCrumbs(oldCrumbs) : setCrumbs([]);
    !folderId && localStorage.setItem("crumbs", JSON.stringify([]));
  }, [folderId, id]);

  const handleClick = e => {
    e.preventDefault();
    const oldCrumbs = get("crumbs");
    // console.log("oldCrumbs: ", oldCrumbs);
    const i = oldCrumbs?.findIndex(crumb => crumb._id === id);
    // console.log("id: ", id);
    // console.log("inxe: ", i);
    const newCrumbs = oldCrumbs.slice(0, i + 1);
    // console.log("newCrumbs: ", newCrumbs);
    newCrumbs?.length ? setCrumbs(newCrumbs) : setCrumbs([]);
    // console.log("crumbs: ", crumbs);
    newCrumbs?.length ? set("crumbs", newCrumbs) : set("crumbs", []);
  };

  return (
    <div className="flex text-gray-500 text-sm">
      {crumbs?.map((crumb, i) => (
        <span key={i}>
          <Link href={`/${crumb._id}`}>
            <a
              data-type="folder"
              data-id={crumb._id}
              className="mx-2"
              href="#"
              onClick={handleClick}
            >
              {crumb?.title}
            </a>
          </Link>
          <span> / </span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
