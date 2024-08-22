const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const connectDB = require("./utils/db");
const customerRoutes = require("./routes/customer.routes");
const orderRoutes = require("./routes/order.routes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/customers", customerRoutes);
app.use("/orders", orderRoutes);



connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

app.use("/", (req, res) => {
  res.send("Welcome to the API");
}
);