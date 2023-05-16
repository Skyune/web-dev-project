import React from "react";
import iconMoon from "../assets/img/icon-moon.svg";
import iconSun from "../assets/img/icon-sun.svg";
import { useState, useEffect } from "react";


import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
 
export function ComplexNavbar() {

  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchData();
  }, []);


  const [progress, setProgress] = useState(0);




  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = async () => {
      const formData = new FormData();
      formData.append("image", file);
      const response = await fetch("https://s38984.eduweb.pwste.edu.pl/artykuly/upload.php", {
        method: "POST",
        body: formData,
      });
      // handle the server response here
    };
    reader.readAsDataURL(file);
  };

  const fetchData = async () => {
    const response = await fetch(
      "https://s38984.eduweb.pwste.edu.pl/artykuly/connection.php"
    );
    const result = await response.json();
    setData(result);
  };

  const handleDelete = async (id) => {
    await fetch(
      "https://s38984.eduweb.pwste.edu.pl/artykuly/delete.php",
      {
        method: "POST",
        body: JSON.stringify({ id }),
      }
    );

    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleAdd = async () => {
    // Upload the image file
    let imageLink;
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      const response = await fetch("https://s38984.eduweb.pwste.edu.pl/artykuly/upload.php", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      imageLink = data.link;
    }
  
    // Add the article to the database
    const response = await fetch(
      "https://s38984.eduweb.pwste.edu.pl/artykuly/add.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          author,
          image: imageLink,
          preview,
          content,
        }),
      }
    );
  
    // handle the server response here
  

    const result = await response.json();
    if (result.success) {
      setShowForm(false);
      setTitle("");
      setAuthor("");
      setImage("");
      setPreview("");
      setContent("");
      fetchData();
    }
  };


  const [openNav, setOpenNav] = React.useState(false);
 
  const [showModal, setShowModal] = React.useState(false);

  const [isFormEnabled, setIsFormEnabled] = useState(false);

  const handleEnableForm = () => {
    setIsFormEnabled(true);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center dark:text-white">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal "
      >
        <a href="#" className="flex items-center dark:text-white">
          Contact
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center dark:text-white">
          More pages
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-white dark:bg-black">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium dark:text-white"
          >
            My Website
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <img className="moon w-6 h-6 cursor-pointer" src={iconMoon} alt="moon" />
            <img className="sun w-6 h-6 cursor-pointer" src={iconSun} alt="sun" />


            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block dark:bg-gradient-to-r dark:from-purple-500 dark:to-indigo-500"
              onClick={() => setShowModal(true)}
            >

              <span>Add Article</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2 dark:">
            <span>Add Article</span>
          </Button>
        </MobileNav>
      </Navbar>
      <div className="mx-auto max-w-screen-md py-12">
      {data.map((item) => (
        <div key={item.id}>
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src={item.obrazek}
          />
        </Card>

    
        <Typography variant="h2" color="blue-gray" className="mb-2 dark:text-purple-300">
        <p>{item.tytul}</p>
        </Typography>
        <Typography color="gray" className="font-normal dark:text-white">
        <p>{item.tresc}</p>

        </Typography>
        <Button onClick={() => handleDelete(item.id)}>Delete</Button>

        </div>
      ))}
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xls">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add Article
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-9 flex-column">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                   
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
          <label>
    Image:
    <input
      type="file"
      accept="image/*"
      onChange={(e) => {
        setImage(e.target.files[0]);
        handleImageUpload(e.target.files[0]);
      }}
    />
  </label>
          <label>
            Preview:
            <input
              type="text"
              value={preview}
              onChange={(e) => setPreview(e.target.value)}
            />
          </label>
          <label>
            Content:
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      handleAdd();
                    }}                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </div>
    </>

    
  );

  
}