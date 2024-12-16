// import React from 'react'
import {
  TextField,
  Box,
  Button,
  FormLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    // console.log(input);
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:3000/books", {
        name: String(input.name),
        author: String(input.author),
        description: String(input.description),
        price: Number(input.price),
        image: String(input.image),
        availabiltiy: Boolean(checked),
      })
      .then((response) => response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input, checked);
    sendRequest().then(() => navigate("/books"));
  };

  return (
    <>
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
            label="Name"
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
            label="Author"
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
            label="Description"
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
            label="Price"
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
            label="Image"
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
                name="checkedB"
                color="primary"
              />
            }
            label="Availability"
          />
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddBook;
