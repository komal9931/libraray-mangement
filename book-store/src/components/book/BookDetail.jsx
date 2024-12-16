// import React from 'react'
import {
  TextField,
  Box,
  Button,
  FormLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
  const id = useParams().id;
  // console.log(id);
  const [input, setInput] = useState({});
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  // console.log(input);

  //TODO: show Data back to the input form
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:3000/books/${id}`)
        .then((response) => response.data)
        .then((data) => setInput(data));
    };
    fetchHandler();
  }, [id]);

  //TODO: Sending updated one specific one patch/put

  const sendRequest = async () => {
    axios
      .patch(`http://localhost:3000/books/${id}`, {
        name: String(input.name),
        author: String(input.author),
        description: String(input.description),
        price: Number(input.price),
        image: String(input.image),
        availabiltiy: Boolean(checked),
      })
      .then((res) => res.data);
  };

  //TODO: sending the request
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);

    sendRequest().then(() => navigate("/books"));
  };

  //TODO: changing the input which is in input i.e in form data
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(input);
  return (
    <>
      {/* <h1>Book Details</h1> */}
      {input && (
        <form onSubmit={handleSubmit}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignContent={"center"}
            alignSelf={"center"}
            marginLeft={"auto"}
            marginRight={"auto"}
            marginTop={10}
            maxWidth={700}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              id="outlined-basic"
              //   label="Name"
              value={input.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <FormLabel>Author</FormLabel>
            <TextField
              id="outlined-basic"
              //   label="Author"
              value={input.author}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="author"
            />
            <FormLabel>Description</FormLabel>
            <TextField
              id="outlined-basic"
              //   label="Description"
              value={input.description}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
            />
            <FormLabel>Price</FormLabel>
            <TextField
              id="outlined-basic"
              //   label="Price"
              value={input.price}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
            />
            <FormLabel>Image</FormLabel>
            <TextField
              id="outlined-basic"
              //   label="Image"
              value={input.image}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  name="checked"
                  color="primary"
                />
              }
              label="Availability"
            />
            <Button variant="contained" color="primary" type="submit">
              Update
            </Button>
          </Box>
        </form>
      )}
    </>
  );
};

export default BookDetail;
