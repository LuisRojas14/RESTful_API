require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Server running on : ${port}`);
});
app.use(bodyParser.json());
// web routes
const orders = require("./router/ordersRouter");
app.use("/api/orders", orders);
//web routes
const users = require("./router/usersRouter");
app.use("/api/users", users);
