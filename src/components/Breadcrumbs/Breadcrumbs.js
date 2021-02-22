import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import useLocalStorage from "../../hooks/useLocalStorage.js";
import useBradcrumbClick from "../../hooks/useBradcrumbClick.js";

const Breadcrumbs = () => {
  const [crumbs, setCrumbs] = useState([]);
  const [folderBuffer, setFolderBuffer] = useState("");

  const router = useRouter();
  const { folderId } = router.query;

  const { get, set } = useLocalStorage();
  const { id } = useBradcrumbClick();
  // console.log("id: ", id);
  useEffect(() => {
    const oldCrumbs = get("crumbs");
    oldCrumbs && oldCrumbs?.length ? setCrumbs(oldCrumbs) : setCrumbs([]);
    !folderId && set("crumbs", []);
    const last = oldCrumbs?.slice(-1);
    // console.log("oldCrumbs", last);
  }, [folderId, id]);

  const handleClick = e => {
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

  useEffect(() => {
    const onpopstate = e => {
      const crumbs = get("crumbs") || [];
      const restCrumbs = crumbs.slice(0, crumbs.length - 1);
      // setFolderBuffer(crumbs.pop()._id);
      // console.log("pop: ", crumbs.pop()._id);
      set("crumbs", restCrumbs);
      // console.log("folderBuffer: ", folderBuffer);
    };

    window.onpopstate = onpopstate;

    return () => {
      window.removeEventListener("popstate", onpopstate);
    };
  }, []);

  return (
    <div className="flex text-gray-500 text-sm">
      {crumbs?.map(crumb => (
        <span key={crumb._id}>
          <Link as={`/${crumb._id}`} href={"/[folderId]"}>
            <a
              data-type="folder"
              data-id={crumb._id}
              className="mx-2"
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
