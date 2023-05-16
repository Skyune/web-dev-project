import React, { useState } from "react";
import { uploadImage, addArticle, fetchData } from "../Api";
import { Typography, Button } from "@material-tailwind/react";

const AddArticleModal = ({ showModal, setShowModal, setData }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [preview, setPreview] = useState("");
    const [content, setContent] = useState("");
    const [isUploading, setIsUploading] = useState(false);

    
    const handleAdd = async () => {
        let imageLink = null;
      
        if (image) {
          const formData = new FormData();
          formData.append("image", image);
      
          try {
            setIsUploading(true);

            imageLink = await uploadImage(formData);
            setIsUploading(false);

          } catch (error) {
            setIsUploading(false);

            console.error("Error uploading image:", error);
            return;
          }
        }
      
        if (imageLink) {
          const articleData = {
            title,
            author,
            image: imageLink,
            preview,
            content,
          };
      
          try {
            // Wait for the image to upload before adding the article
            await addArticle(articleData);
            const updatedData = await fetchData(); 
            setData(updatedData); // Update data state with new data
            setShowModal(false); 
          } catch (error) {
            console.error("Error adding article:", error);
            return;
          }
        } else {
          console.error("Image not uploaded");
          return;
        }
    };
      
      const handleImageUpload = (file) => {
        const reader = new FileReader();
        reader.onloadend = async () => {
          const formData = new FormData();
          formData.append("image", file);
      
          try {
            const response = await uploadImage(formData);
          } catch (error) {
            console.error("Error uploading image:", error);
          }
        };
        reader.readAsDataURL(file);
      };
      
    return (
    <>
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
            {isUploading ? (
                 <svg
                 version="1.1"
                 id="arrow1"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink"
                 x="0px"
                 y="0px"
                 width="40px"
                 height="40px"
                 viewBox="0 0 40 40"
                 enableBackground="new 0 0 40 40"
                 xmlSpace="preserve"
               >
 <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
           s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
           c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
         <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
           C22.32,8.481,24.301,9.057,26.013,10.047z">
           <animateTransform attributeType="xml"
             attributeName="transform"
             type="rotate"
             from="0 20 20"
             to="360 20 20"
             dur="0.5s"
             repeatCount="indefinite"/>
           </path>               </svg>
          ) : null}
              
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
    </>
    );
    };
    
    export default AddArticleModal;