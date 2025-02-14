import express from "express";
// import Book from "../models/book.model.js";
import { getBooks } from "../controller/book.controller.js";
const router = express.Router();

router.get("/", getBooks);

export default router;

