import { useEffect, useState } from "react";
import Router from "next/router";

import Header from "../../components/Header/Header.js";

import { auth, login } from "../../drivers/backend.driver.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // If authenticated user visits /login, redirect to homepage
        const res = await auth({});
        if (res.status === 200) Router.replace("/");
      } catch (error) {
        console.warn("Auth Error: ", error);
      }
    })();
  }, []);

  const submit = async e => {
    e.preventDefault();

    setCheck(null);
    try {
      const res = await login({ auth: { username, password } });
      if (res.status === 200) {
        localStorage.setItem("markmeUserDetails", JSON.stringify(res.user));
        Router.replace("/");
      }
      if (res.status > 400)
        setCheck("Username and password combo not found, please try again.");
    } catch (error) {
      console.warn("Auth Error: ", error);
      setCheck("An error occurred, please try again later.");
    }
  };

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
      {check && <p>{check}</p>}
    </>
  );
};

export default Login;
