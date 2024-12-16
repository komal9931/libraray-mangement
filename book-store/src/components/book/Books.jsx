// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";
const API = "http://localhost:3000/books";

const Books = () => {
  const [Books, setBooks] = useState();
  const FetchHandler = async () => {
    return await axios.get(API).then((response) => response.data);
  };
  useEffect(() => {
    FetchHandler().then((data) => setBooks(data));
  }, []);
  console.log(Books);
  return (
    <>
      <ul>
        {Books &&
          Books.map((book, index) => {
            if (book.availabiltiy === true) {
              return (
                <li key={index}>
                  <Book book={book} />
                  {/* <img src={book.image} alt="" />
                <article>By {book.author}</article>
                <h3>{book.name}</h3>
                <p>{book.description}</p>
                <h2>Rs:{book.price}</h2> */}
                </li>
              );
            }
          })}
      </ul>
    </>
  );
};

export default Books;
