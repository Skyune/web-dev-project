export const uploadImage = async (formData) => {
  try {
    const response = await fetch("https://s38984.eduweb.pwste.edu.pl/artykuly/upload.php", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data.link;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export const addArticle = async (articleData) => {
  try {
    const response = await fetch("https://s38984.eduweb.pwste.edu.pl/artykuly/add.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleData),
    });
  } catch (error) {
    console.error("Error adding article:", error);
    throw error;
  }
};

export const fetchData = async () => {
    const response = await fetch(
      "https://s38984.eduweb.pwste.edu.pl/artykuly/connection.php"
    );
    const result = await response.json();
    return result;
  };
  
  export const handleDelete = async (id, setData) => {
    await fetch(
      "https://s38984.eduweb.pwste.edu.pl/artykuly/delete.php",
      {
        method: "POST",
        body: JSON.stringify({ id }),
      }
    );
    setData((prevData) => prevData.filter((item) => item.id !== id));

  };

  
  


  