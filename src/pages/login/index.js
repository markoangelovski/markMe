import { useEffect, useState } from "react";
import Router from "next/router";

import Header from "../../components/Header/Header.js";

import { auth, login } from "../../drivers/backend.driver.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMsg, setresponseMsg] = useState(null);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        // If authenticated user visits /login, redirect to homepage
        const res = await auth({});
        if (res.status === 200) Router.replace("/");
        if (res.status >= 400) setCheck(true);
      } catch (error) {
        console.warn("Auth Error: ", error);
        setCheck(true);
      }
    })();
  }, []);

  const submit = async e => {
    e.preventDefault();

    setresponseMsg(null);
    try {
      const res = await login({ auth: { username, password } });
      if (res.status === 200) {
        localStorage.setItem("markmeUserDetails", JSON.stringify(res.user));
        Router.replace("/");
      }
      if (res.status > 400)
        setresponseMsg(
          "Username and password combo not found, please try again."
        );
    } catch (error) {
      console.warn("Auth Error: ", error);
      setresponseMsg("An error occurred, please try again later.");
    }
  };

  if (!check) return <div>Loading...</div>;

  return (
    <>
      <Header>
        <title>Who are you?</title>
      </Header>
      <form onSubmit={submit}>
        <input
          type="email"
          name="username"
          id="username"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={e => setPassword(e.target.value)}
        />
        <input type="submit" name="submit" id="submit" value="Submit" />
      </form>
      {responseMsg && <p>{check}</p>}
    </>
  );
};

// Flag for rendering the page with or without global Layout. Used for not rendering Layout on Login
Login.withLayout = false;

export default Login;
