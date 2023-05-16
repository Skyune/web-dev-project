import logo from './logo.svg';
import './App.css';
import { Button } from "@material-tailwind/react";



import { DataFetcher } from './components/DataFetcher';
import { ComplexNavbar } from './components/ComplexNavbar';

function App() {


  return (
    
    <div className="App  dark:bg-black">
      <ComplexNavbar />
      
    </div>


  );
}


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
