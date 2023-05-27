const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const app = express();
const auth = require("./routers/auth");
const orders = require("./routers/orders");
const createOrder = require("./routers/createOrder");
const createRestaurant = require("./routers/createRestaurant");
const place = require("./routers/place");
const adminOrder = require("./routers/adminOrders");
const dotenv = require("dotenv").config();
const { connectDatabse } = require("./database");

app.use(cors());
app.use(express.json());
app.use(auth);
app.use(orders);
app.use(createOrder);
app.use(createRestaurant);
app.use(place);
app.use(adminOrder);

// CONNECT
// mongoose
//   .connect(connectDatabse, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server Listening on: ${PORT}`));
//   })
//   .catch((error) => console.log(`${error} did not connect`));

const startServer = async () => {
  await connectDatabse();
  app.listen(PORT, () => {
    console.log(`server is running at localhost:${PORT}`);
  });
};

startServer();
