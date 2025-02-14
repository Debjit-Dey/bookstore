import mongoose from "mongoose";
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    name: String,
    title: String,
    price: Number,
    category: String,
    image: String,
})

const Book = mongoose.model('Book', bookSchema);
export default Book;