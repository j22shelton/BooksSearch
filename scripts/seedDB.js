const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = {
    authors: ["Francis Scott Fitzgerald"],
    description: "The Roaring 20's!",
    image: "https://books.google.com/books/content?id=HestSXO362YC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70Q2VjgYVN75fnbJ3KZWV85nlIVodgvTAHFdux6M2nab6sJgicXPsPBW8SpjXcsTfoPGGjBue-7UlovXDLtVGPKS62SihUWLQEb2pKvSaBd7OEtIjr4nSK4dh0-fuLkfvfYw3Z5",
    link: "https://books.google.com/books?id=HestSXO362YC&dq=The+great+gatsby&hl=&source=gbs_api",
    title: "The Great Gatsby",
}

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });