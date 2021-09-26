import { useEffect, useState } from "react";
import Router from "next/router";

import Header from "../../components/Header/Header.js";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.js";

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
      console.warn("Login Error: ", error);
      setCheck(true);
      setresponseMsg("An error occurred, please try again later.");
    }
  };

  if (!check) return <LoadingScreen />;

  return (
    <>
      <Header>
        <title>Who are you?</title>
      </Header>
      <div
        className="min-h-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80')"
        }}
      >
        <div className="flex justify-end">
          <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">
            <div>
              <form onSubmit={submit}>
                <div>
                  <span className="text-sm text-gray-900">Welcome back</span>
                  <h1 className="text-2xl font-bold">Login to your account</h1>
                </div>
                <div className="mt-5">
                  <label className="block text-md mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label className="block text-md mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                {/* <div className="flex justify-between">
                  <div>
                    <input
                      className="cursor-pointer"
                      type="radio"
                      name="rememberme"
                    />
                    <span className="text-sm">Remember Me</span>
                  </div>
                  <span className="text-sm text-blue-700 hover:underline cursor-pointer">
                    Forgot password?
                  </span>
                </div> */}
                <div className="">
                  <button className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">
                    Login now
                  </button>

                  {/* <div className="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
                    <img
                      className=" h-5 cursor-pointer"
                      src="https://i.imgur.com/arC60SB.png"
                      alt=""
                    />
                    <button>Or sign-in with google</button>
                  </div> */}
                </div>
              </form>
              {/* <p className="mt-8">
                Dont have an account?
                <span className="cursor-pointer text-sm text-blue-600">
                  Join free today
                </span>
              </p> */}
              <p
                className={`mt-8 ${
                  check ? "visible" : "invisible"
                } text-red-500`}
              >
                {responseMsg}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Flag for rendering the page with or without global Layout. Used for not rendering Layout on Login
Login.withLayout = false;

export default Login;
