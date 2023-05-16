import React, { useEffect, useState } from "react";
import { fetchData, handleDelete } from "./Api"; 
import Navbar from "./components/Navbar";
import ArticleCard from "./components/ArticleCard";
import AddArticleModal from "./components/AddArticleModal";
import SignInForm from "./components/SignInForm";

const App = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showSignUpModal, setSignUpModal] = useState(true);


  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
    });
  }, []);

  const isLoggedIn = () => {
    const loginData = localStorage.getItem("isLoggedIn");
  
    if (loginData) {
      const { loggedIn, expiresAt } = JSON.parse(loginData);
  
      // Check if the session is still valid based on the expiration time
      if (loggedIn && expiresAt && new Date().getTime() < expiresAt) {
        return true;
      }
    }
  
    return false;
  };

  //nie dziala wtf?
  const isUserLoggedIn = isLoggedIn();


  const openModal = () => {
    setShowModal(true);
  };



  return (
    <div className="dark:bg-black">
      <Navbar openModal={openModal}/>
      <div className="mx-auto max-w-screen-md py-12">
        {data.map((item) => (
          <ArticleCard key={item.id} item={item} handleDelete={() => handleDelete(item.id, setData)} />
        ))}
        <AddArticleModal showModal={showModal} setShowModal={setShowModal}  setData={setData} />
        {!isUserLoggedIn && <SignInForm showSignUpModal={showSignUpModal} setSignUpModal={setSignUpModal}/>}
      </div>
    </div>
  );
};


//move this somewhere else later
//jak zyc

window.onload = function() {

  //Icons
  
  const sunIcon = document.querySelector(".sun");
  const moonIcon = document.querySelector(".moon");
  
  //Theme Vars
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  // Icon Toggling
  const iconToggle = () => {
      moonIcon.classList.toggle("display-none");
      sunIcon.classList.toggle("display-none");
  };
  
  const themeCheck = () => {
  
      if (userTheme === "dark" || (!userTheme && systemTheme)) {
          document.documentElement.classList.add("dark");
          moonIcon.classList.add("display-none");
          return
      }
      sunIcon.classList.add("display-none");
    
  };
  
  // Theme Toggling
  const themeToggle = () => {
      if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
          iconToggle();
          return;
      }
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      iconToggle();
  };
  
  if (sunIcon && moonIcon) {
  
    moonIcon.addEventListener("click", () => {themeToggle()});
    sunIcon.addEventListener("click", () => {themeToggle()});
  }
  
  themeCheck();
  }


export default App;
