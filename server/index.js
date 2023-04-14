const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8000;
const MONGO_URI =
  "mongodb+srv://Khash-Erdene:Itachi07@cluster0.79uixyi.mongodb.net/hoolly";
const app = express();
const auth = require("./routers/auth");
const order = require("./routers/order");
const dotenv = require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(auth);
app.use(order);

// CONNECT
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Listening on: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
