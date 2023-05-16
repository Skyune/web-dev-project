import { useState, useEffect } from "react";

export const DataFetcher = () => {
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

  return (
    <div>
      <button onClick={() => setShowForm(true)}>Add</button>
      {showForm && (
        <div>


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
          <button onClick={handleAdd}>OK</button>
        </div>
      )}
      {data.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Title: {item.tytul}</p>
          <p>Author: {item.autor}</p>
          <p><img src={item.obrazek} alt={item.tytul} /></p>
          <p>Preview: {item.zajawka}</p>
          <p>Content: {item.tresc}</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};