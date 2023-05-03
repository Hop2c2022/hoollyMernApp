const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8000;
const MONGO_URI =
  "mongodb+srv://Khash-Erdene:Itachi07@cluster0.79uixyi.mongodb.net/hoolly";
const app = express();
const auth = require("./routers/auth");
const orderInfo = require("./routers/orderInfo");
const orders = require("./routers/orders");
const createOrder = require("./routers/createOrder");
const createRestaurant = require("./routers/createRestaurant");
const place = require("./routers/place");
const dotenv = require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(auth);
app.use(orderInfo);
app.use(orders);
app.use(createOrder);
app.use(createRestaurant);
app.use(place);

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
