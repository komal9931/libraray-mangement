const Books = require("../models/bookSchema");

//creating a book Data Or post
const postData = async (req, res, next) => {
  const { name, author, description, price, availabiltiy, image } = req.body;
  let book;
  try {
    book = new Books({
      name,
      author,
      description,
      price,
      availabiltiy,
      image,
    });
    await book.save();
  } catch (e) {
    console.log(e);
  }
  if (!book) {
    return res.status(500).json({ message: "Can't Created" });
  } else {
    return res.status(201).json({ book });
  }
  // next();
};

//getting allbook

const getallbook = async (req, res) => {
  let book;
  try {
    book = await Books.find();
  } catch (e) {
    console.log(e);
  }
  if (!book) {
    res.status(400).send("Book not Found");
  } else {
    res.status(200).json(book);
  }
};

//getting book individualy by id

const getbyIdbook = async (req, res) => {
  const _id = req.params.id;
  let book;
  try {
    book = await Books.findById({ _id });
  } catch (e) {
    console.log(e);
  }
  if (!book) {
    res.status(400).send({ message: "Book not Found" });
  } else {
    res.status(200).json(book);
  }
};

// get book data by name

const getbyNamebook = async (req, res) => {
  const name = req.params.name;
  let book;
  try {
    book = await Books.findOne({ name });
  } catch (e) {
    console.log(e);
  }
  if (!book) {
    res.status(400).send({ message: "Book not Found" });
  } else {
    res.status(200).json(book);
  }
};

//update book by its id individual update

const updatebookbyId = async (req, res) => {
  const _id = req.params.id;
  const { name, author, description, price, availabiltiy, image } = req.body;
  let book;
  try {
    book = await Books.findByIdAndUpdate(
      { _id },
      {
        name,
        author,
        description,
        price,
        availabiltiy,
        image,
      },
      { new: true }
    );
  } catch (e) {
    console.log(e);
  }
  if (!book) {
    res.status(400).send({ message: "Book not Found" });
  } else {
    res.status(201).json(book);
  }
};

// delete by id

const deletebookbyId = async (req, res) => {
  const _id = req.params.id;
  let book;
  try {
    book = await Books.findByIdAndDelete({ _id });
  } catch (e) {
    console.log(e);
  }
  if (!book) {
    res.status(404).send({ message: "Book not Found" });
  } else {
    res.status(202).json(book);
  }
};

exports.postData = postData;
exports.getallbook = getallbook;
exports.getbyIdbook = getbyIdbook;
exports.getbyNamebook = getbyNamebook; // by Name
exports.updatebookbyId = updatebookbyId;
exports.deletebookbyId = deletebookbyId;
