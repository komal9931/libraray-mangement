// import React from 'react'
import { Button } from "@mui/material";
import "./Book.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Book = (props) => {
  const { _id, name, author, description, price, availabiltiy, image } =
    props.book;

  const navigate = useNavigate();

  //TODO: Removing the book specific one
  const removeHandler = async () => {
    await axios
      .delete(`http://localhost:3000/books/${_id}`)
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then(() => navigate("/"))
      // .then(() => navigate("/books"))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="card">
        <img src={image} height={550} width={200} alt="" />
        <article>By:{author}</article>
        <h6>{availabiltiy}</h6>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>Rs:{price}</h2>
        <Button LinkComponent={Link} to={`/books/${_id}`}>
          Update
        </Button>
        <Button onClick={removeHandler}>Remove</Button>
      </div>
    </>
  );
};

export default Book;
