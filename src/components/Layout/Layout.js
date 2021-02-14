import Router from "next/router";
import { useEffect, useState } from "react";
import { auth } from "../../drivers/backend.driver.js";

import Header from "../Header/Header.js";
import Navbar from "../Navbar/Navbar.js";
import Sidebar from "../Sidebar/Sidebar.js";

const Layout = ({ title, children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await auth({});

        if (res.status >= 400) {
          localStorage.removeItem("markmeUserDetails");
          Router.replace("/login");
        } else {
          setUserAuthenticated(true);
        }
      } catch (error) {
        console.warn("Auth Error: ", error);
        Router.replace("/login");
      }
    })();
  }, []);

  if (!userAuthenticated) return null;

  return (
    <>
      <Header>{title && <title>{title}</title>}</Header>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex overflow-hidden">
          <Sidebar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
