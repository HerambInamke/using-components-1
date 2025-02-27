// write the book component code here
import React from "react";

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-64">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-blue-600">Genre: {genre}</p>
      <p className="text-blue-500">Author: {author}</p>
    </div>
  );
};

export default BookCard;
