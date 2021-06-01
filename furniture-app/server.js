
const express = require("express");
const furnitureRouter = require("./router/furnitureRouter");
const authRouter = require("./router/authRouter");
const cors = require("cors");
// Connecting db
require("./config/dbConnect");

// Instatiating express
const app = express();
app.use(cors())

// Json Format
app.use(express.json());

app.use("/furnitures", furnitureRouter );
app.use("/auth", authRouter);


// app.use('/furnitures', require('./router/furnitureRouter'));

// Port
app.listen(4002, () => console.log("Server is running "))