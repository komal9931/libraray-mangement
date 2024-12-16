const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routers/book-routers");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/books", router);

// app.get('/',(req, res) =>{
// res.status(200).send("welcome to my home page");

// })

mongoose
  .connect(
    "mongodb+srv://itsmelovezero:KAiQEOXRss68fcB5@cluster0.boep1ut.mongodb.net/LibraryManagement?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connection Successfull");
  })
  .then(() => {
    app.listen(4000, () => {
      console.log(`Server is ruuning on http://localhost:3000`);
    });
  })
  .catch((e) => {
    console.error("Error", e);
  });
