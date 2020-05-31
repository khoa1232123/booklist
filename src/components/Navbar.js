import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Book list</h1>
      <p>Currently you have {books.length} books to get thought...</p>
    </div>
  );
};

export default Navbar;
