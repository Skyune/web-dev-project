import React, { useState } from "react";
import {
  Navbar as MaterialNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const SignInForm = ({showSignUpModal, setSignUpModal, handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (email === "krystianh595@gmail.com" && password === "123456") {
        const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // Set expiration to 30 days from now
        localStorage.setItem("isLoggedIn", JSON.stringify({ loggedIn: true, expiresAt: expirationTime }));

        console.log("Login successful");
        handleLogin();
    } else {
      console.log("Login failed");
    }
  };

  return (
    <>
    {showSignUpModal ? (
      <>
    <div className="opacity-105 fixed inset-0 z-40 bg-black z-100">

    <div
    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  >

      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 z-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flexitems-center h-5">

</div>

</div>

</div>
<button
  type="submit"
  onClick={(e) => {
    handleSubmit(e);
    setSignUpModal(false);
  }}
  className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
>
  Sign in
</button>


</form>
</div>
</div>
</div>

</div>
</div>

</>
    ) : null}
    </>
);
};

export default SignInForm;