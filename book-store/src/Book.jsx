// const Book = (props) => {
//   const { name, author, description, price, availabiltiy, image } = props.book;

//   return (
//     <>
//       <div className="container">
//         <div className="card">
//           <img className="card-img" src={image} alt="" />

//           <article>By:{author}</article>
//           <h6>{availabiltiy}</h6>

//           <h3>{name}</h3>
//           <p>{description}</p>
//           <h2>Rs:{price}</h2>
//           <button className="btn btn-primary">Update</button>
//           <button className="btn btn-danger">Remove</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Book;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import Book from "./Book";

//FIXME: fetching with fetch method
// const fetchapiData = async (url) => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// return data;
//   } catch (e) {
//     console.log(e);
//   }
// };
// useEffect(() => {
//   fetchapiData(API);
// });

//TODO: fetching with AXIOS METHOD
// let API = "http://localhost:3000/books";

// const fetchOwnData = async () => {
//   return await axios.get(API).then((response) => response.data);
// };

// const [Books, setBooks] = useState();
// useEffect(() => {
//   fetchOwnData().then((data) => setBooks(data));
// }, []);

// console.log(Books);

{
  /* <ul>
        {Books &&
          Books.map((book, index) => {
            return (
              <li key={index}>
                <Book book={book} />
                <img src={book.image} alt="" />
                <article>By {book.author}</article>
                <h3>{book.name}</h3>
                <p>{book.description}</p>
                <h2>Rs:{book.price}</h2>
              </li>
            );
          })}
      </ul> */
}

{
  /* <div className="data">
        <h1>Fetching own Data made by Pankaj Kumar</h1>
      </div> */
}
