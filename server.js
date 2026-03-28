const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const connectDB = require("./config/db");
connectDB();

const productRoutes = require("./routes/productsRoutes");

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.listen(3000, () => console.log("Server running on port 3000"));