import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumbs = () => {
  const router = useRouter();
  const folderPath = router.asPath.split("#/")[1];
  const crumbs = folderPath?.split("/");

  return (
    <div className="flex text-gray-500 text-sm">
      <span>
        <Link href={"/#/"}>
          <a>Home</a>
        </Link>
        {crumbs?.[0] && <span className="mx-2">/</span>}
      </span>
      {crumbs?.map((crumb, i) => (
        <span key={i}>
          <Link href={`/#/${folderPath.split(`${crumb}`)[0] + crumb}`}>
            <a>{decodeURI(crumb).split("-").join(" ")}</a>
          </Link>
          {crumbs.length !== i + 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
