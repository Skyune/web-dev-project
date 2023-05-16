import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/discord.svg';
import navIcon5 from '../assets/img/twitter.svg';
import profile from '../assets/img/profile.png';
import code from '../assets/img/code.svg';
import briefcase from '../assets/img/briefcase.svg';
import envelope from '../assets/img/envelope.svg';
import home from '../assets/img/home.svg';

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

import './NavBar.css';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [navLinkStyle, setNavLinkStyle] = useState({
    opacity: 1,
  });
  const [navLinkPosition, setNavLinkPosition] = useState(0);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        setNavLinkStyle({ opacity: 0.8 });
        setNavLinkPosition(0);


      } else {
        setScrolled(false);
        setNavLinkStyle({ opacity: 0 });
        setNavLinkPosition(80); // adjust the value to the desired amount of translation

      }
    }

    //speedruned this whole project in 2 days
    //any%
    //sleep is for the weak
    //lets kurwa go

    window.addEventListener('scroll', () => {
        updateActiveLink();
      });

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container fluid className="flex-column justify-content-center">        
        <Navbar.Brand href="/">
       
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto flex-column">
            <div className="social-icon">

                <a><img src = {profile} alt="Logo" className="profile-img"/></a>
                


</div>
<hr></hr>
<div flex-column>
    <div>
      <div className="social-icon"style={{ transform: `translateX(${navLinkPosition}%)` }}>
        <a href="#">
          <img src={home} alt="" />
        </a>
      </div>
      <Nav.Link
        href="#home"
        className={
          activeLink === 'connect'
            ? 'active navbar-link'
            : 'navbar-link'
        }
        onClick={() => onUpdateActiveLink('home')}
        style={navLinkStyle} // add inline styling here
      >
        Home
      </Nav.Link>
      </div>

      <div>
      <div className="social-icon"style={{ transform: `translateX(${navLinkPosition}%)` }}>
        <a href="#">
          <img src={briefcase} alt="" />
        </a>
      </div>
      <Nav.Link
        href="#skills"
        className={
          activeLink === 'skills'
            ? 'active navbar-link'
            : 'navbar-link'
        }
        onClick={() => onUpdateActiveLink('skills')}
        style={navLinkStyle} // add inline styling here
      >
        Skills
      </Nav.Link>
      </div>

      
      <div>
      <div className="social-icon"style={{ transform: `translateX(${navLinkPosition}%)` }}>
        <a href="#">
          <img src={code} alt="" />
        </a>
      </div>
      <Nav.Link
        href="#projects"
        className={
          activeLink === 'projects'
            ? 'active navbar-link'
            : 'navbar-link'
        }
        onClick={() => onUpdateActiveLink('projects')}
        style={navLinkStyle} // add inline styling here
      >
        Projects
      </Nav.Link>
      </div>

      
      <div>
      <div className="social-icon"style={{ transform: `translateX(${navLinkPosition}%)` }}>
        <a href="#">
          <img src={envelope} alt="" />
        </a>
      </div>
      <Nav.Link
        href="#connect"
        className={
          activeLink === 'connect'
            ? 'active navbar-link'
            : 'navbar-link'
        }
        onClick={() => onUpdateActiveLink('connect')}
        style={navLinkStyle} // add inline styling here
      >
        Contact
      </Nav.Link>
      </div>
    </div>
    

	<hr></hr>


    <Nav.Link
        href="#connect"
        className={
          activeLink === 'connect'
            ? 'active navbar-link'
            : 'navbar-link'
        }
        onClick={() => onUpdateActiveLink('connect')}
        style={navLinkStyle} // add inline styling here
      >
       <span class="navbar-text"> Socials </span>
        </Nav.Link>

       
       
 <div className="social-icon">
    <a href="#"><img src={navIcon1} alt="" /></a>
    <a href="#"><img src={navIcon2} alt="" /></a>
    <a href="#"><img src={navIcon3} alt="" /></a>
    <a href="#"><img src={navIcon4} alt="" /></a>
</div>

<hr></hr>



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

function calculateSectionPositions() {
    const sections = document.querySelectorAll('section');
    const sectionPositions = [];
  
    sections.forEach((section) => {
      sectionPositions.push(section.offsetTop);
    });
  
    return sectionPositions;
  }

  function getCurrentSection() {
    const sectionPositions = calculateSectionPositions();
    const currentPosition = window.scrollY;
  
    let currentSectionIndex = 0;
  
    for (let i = 0; i < sectionPositions.length; i++) {
      if (currentPosition >= sectionPositions[i]) {
        currentSectionIndex = i;
      } else {
        break;
      }
    }
  
    return currentSectionIndex;
  }

  function updateActiveLink() {
    const currentSectionIndex = getCurrentSection();
    const navbarLinks = document.querySelectorAll('.navbar-link');
  
    navbarLinks.forEach((link, index) => {
      if (index === currentSectionIndex) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }