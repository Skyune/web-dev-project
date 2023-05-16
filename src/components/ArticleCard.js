import React from "react";
import { Card, Typography, Button } from "@material-tailwind/react";

const ArticleCard = ({ item, handleDelete }) => {
  return (
    <div key={item.id}>
      <Card className="mb-12 overflow-hidden ">
      <img
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
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default ArticleCard;
